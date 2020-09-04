import React from 'react';
import reactDOM from 'react-dom/server';
import path from 'path';
import fs from 'fs';
import App from '../../app/component';

export default (req, res) => {
    fs.readFile(
        path.resolve(__dirname, '../../app/index.html'),
        'utf-8',
        (error, data) => {
            if (error) {
                console.log(error);
                return res.status(500).send('something went wrong');
            }
            const html = data.replace(
                '<div id="app"></div>',
                `<div id="app">${reactDOM.renderToString(<App />)}</div>`
            );
            return res.send(html);
        }
    );
};
