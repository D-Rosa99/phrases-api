import axios from 'axios';

export default function getPhraseList(setPhrasesList) {
    axios
        .get('https://type.fit/api/quotes')
        .then(({ data }) => setPhrasesList(data))
        .catch((err) => console.log('Something went wrong ', err));
}
