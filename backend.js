const express = require('express')
const app = express()
const port = 4000;
const cors = require('cors');
const { loadGetInitialProps } = require('next/dist/shared/lib/utils');

app.use(cors({origin: 'http://localhost:3000'}));

app.post('/', (req, res) => {
    res.json({message: 'Success'});
    const folderPath = req.body;
    console.log(folderPath);
    console.log('Accepted');
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))