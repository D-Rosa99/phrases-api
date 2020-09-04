import axios from 'axios';

export default async () => {
    try {
        return await axios.get('https://type.fit/api/quotes');
    } catch (err) {
        console.log('Something went wrong ', err);
    }
};
