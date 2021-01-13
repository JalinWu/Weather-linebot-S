
var getFlexMsg = function (weather) {
    const { locationName, time, TEMP, highestTEMP, lowestTEMP, Weather } = weather;

    let replyMsg = new Object({
        "type": "flex",
        "altText": "this is a flex message"
    })

    // Put your code into contents, then change value. Gogogo~ 
    // replyMsg.contents = 

    return replyMsg;

}

module.exports = {
    getFlexMsg
}