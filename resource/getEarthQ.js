const axios = require('axios');

const Authorization = "CWB-87D5383E-9976-4955-83AD-CC7C1B0A426A";

var getEarthQ = function () {
    const URI = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/E-A0015-001?Authorization=${Authorization}`;

    return new Promise((resolve, reject) => {
        axios.get(encodeURI(URI))
            .then(async (res) => {
                const { reportImageURI } = res.data.records.earthquake[0];
                resolve(reportImageURI);
            })
            .catch((err) => {
                reject(err);
            });
    })
}

module.exports = {
    getEarthQ
}