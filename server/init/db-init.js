import mongoose from 'mongoose';

export default () =>
    mongoose
        .connect('mongodb://localhost/phrases_api', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('Database started successfully'))
        .catch((err) => ('There was an error running mongo ', err));
