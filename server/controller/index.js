import { Quotes, validateQuoteInput } from '../models/quotes';
import { User, validateUserInput } from '../models/user';

function getModelFromUrl(url) {
    const isQuoteModel = url.slice(5) === 'quote';
    return {
        Model: isQuoteModel ? Quotes : User,
        validateInput: isQuoteModel ? validateQuoteInput : validateUserInput,
    };
}

export async function getAllData(req, res) {
    const { Model } = getModelFromUrl(req.baseUrl);

    const getDataFromModel = await Model.find().select('-_id -__v');
    res.status(200).json(getDataFromModel);
}

export async function postData(req, res) {
    const { Model, validateInput } = getModelFromUrl(req.baseUrl);
    const { error, value } = validateInput(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const newData = new Model(value);
        await newData.save();
        return res.status(200).send('successful');
    } catch (err) {
        console.log('something went wrong ', err);
    }
}

export async function deleteData(req, res) {
    const { Model } = getModelFromUrl(req.baseUrl);
    const { key, fieldToSearch } = req.params;

    try {
        const deleteData = await Model.deleteOne({ [fieldToSearch]: key });
        if (deleteData.deletedCount < 1)
            return res.status(404).send('This quote does not exist');

        res.status(200).send('Deleted successfully!');
    } catch (err) {
        console.log('Something went wrong ', err);
    }
}

export async function updateData(req, res) {
    const { Model, validateInput } = getModelFromUrl(req.baseUrl);
    const { key, fieldToSearch, fieldToUpdate } = req.params;

    const { error, value } = validateInput(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        const updateData = await Model.updateOne(
            { [fieldToSearch]: key },
            { $set: { [fieldToUpdate]: value[fieldToUpdate] } }
        );
        if (updateData.nModified < 1)
            return res.status(404).send('This user does not exist');

        return res.status(200).send('Updated successfully!');
    } catch (err) {
        console.log('Something went wrong ', err);
    }
}
