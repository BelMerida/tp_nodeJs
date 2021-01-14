const request = require("request-promise");

request({uri:"https://reclutamiento-14cf7.firebaseio.com/personas.json", json: true,})
    .then((personas) => console.log(personas));