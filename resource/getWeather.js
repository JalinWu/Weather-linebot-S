const axios = require('axios');

const Authorization = "CWB-87D5383E-9976-4955-83AD-CC7C1B0A426A";

var getWeather = function (userInputLocation) {
    const URI = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${Authorization}&locationName=${userInputLocation}`;

    return new Promise((resolve, reject) => {
        axios.get(encodeURI(URI))
            .then(async (res) => {
                try {
                    const { locationName, time, weatherElement } = res.data.records.location[0];
    
                    let result = new Object();
                    result.locationName = locationName;
                    result.time = time.obsTime;
                    result.TEMP = weatherElement.find(ele => ele.elementName == "TEMP").elementValue;
                    result.highestTEMP = weatherElement.find(ele => ele.elementName == "D_TX").elementValue;
                    result.lowestTEMP = weatherElement.find(ele => ele.elementName == "D_TN").elementValue;
                    result.Weather = weatherElement.find(ele => ele.elementName == "Weather").elementValue;
    
                    let replyMsg = `地點：${result.locationName}\n時間：${result.time}\n溫度：${result.TEMP}\n最高溫度：${result.highestTEMP}\n最低溫度：${result.lowestTEMP}\n天氣概況：${result.Weather}`
                    resolve(replyMsg);
                } catch (error) {
                    resolve("Oops, 請輸入正確的地名喔!");                    
                }
            })
            .catch((err) => {
                reject(err);
            });
    })
}

var getWeatherObject = function (userInputLocation) {
    const URI = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${Authorization}&locationName=${userInputLocation}`;

    return new Promise((resolve, reject) => {
        axios.get(encodeURI(URI))
            .then(async (res) => {
                try {
                    const { locationName, time, weatherElement } = res.data.records.location[0];
    
                    let result = new Object();
                    result.status = 200;
                    result.locationName = locationName;
                    result.time = time.obsTime;
                    result.TEMP = weatherElement.find(ele => ele.elementName == "TEMP").elementValue;
                    result.highestTEMP = weatherElement.find(ele => ele.elementName == "D_TX").elementValue;
                    result.lowestTEMP = weatherElement.find(ele => ele.elementName == "D_TN").elementValue;
                    result.Weather = weatherElement.find(ele => ele.elementName == "Weather").elementValue;
    
                    // let replyMsg = `地點：${result.locationName}\n時間：${result.time}\n溫度：${result.TEMP}\n最高溫度：${result.highestTEMP}\n最低溫度：${result.lowestTEMP}\n天氣概況：${result.Weather}`
                    resolve(result);
                } catch (error) {
                    resolve({
                        status: 400,
                        msg: "Oops, 請輸入正確的地名喔!"
                    });                    
                }
            })
            .catch((err) => {
                reject(err);
            });
    })
}

module.exports = {
    getWeather,
    getWeatherObject
}