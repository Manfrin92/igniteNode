const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({ resp: 'Olar' });
});

app.listen(3333, () => {
    console.log('Server started at 3333.');
});
