const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendmail = require('sendmail')();

let entries = 0;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    entries ++;
    res.end(`<h1>${entries}</h1>`);
})

app.post('/request', (req, res) => {
    const { name, phoneNumber, comment } = req.body;

    sendmail({
        from: 'no-reply@langschool.com',
        to: 'Gurazal@mail.ru',
        subject: 'Новая заявка',
        html:  `Имя: ${name},
                Телефон: ${phoneNumber},
                Комментарий: ${comment}`,
      }, function(err, reply) {
            if (err) {
                res.status(400).json('error')
            } else {
                res.json('Success');
            }
    });
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`app is running on port ${process.env.PORT}`);
})