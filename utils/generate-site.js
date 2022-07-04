import { rejects } from 'assert';
import fs from 'fs';

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, e => {
            // if there's an error, reject the Promise and send error
            if (e) {
                reject(e);
                return;
            }

            // if okay
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', e => {
            if (e) {
                reject(e);
                return;
            }

            resolve({
                ok: true,
                message: 'File  copied'
            })
        })
    })
}

export {writeFile, copyFile}