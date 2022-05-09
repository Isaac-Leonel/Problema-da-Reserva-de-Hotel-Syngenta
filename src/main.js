const hotelBase = require('./hotelBase')

// A function to separete the input, client from date list
function separeteClientsAndDates (input) {
    const [type, dates] = input.split(': ');
    const listDates = dates.split(', ').map(date => new Date(date))//Split the dates and make a date object
    return [type, listDates]
}

// To add the prices based on day | Array add with reduce
function getAllPrices (type, hotel, listDates) {
    return listDates.reduce((acc, date) => {
        if (date.getDay() === 0 || date.getDay() === 6) {
            return acc + hotel[type].weekend
        } else {
            return acc + hotel[type].weekday
        }
    }, 0)
}

// Get the cheapest price
function getPriceArray (type, listDate){
    var Highest = 1000
    hotelBase.forEach((hotel, i, array) =>{
        const priceHotel = getAllPrices(type, hotel, listDate)
        switch(i){
            case 0:
                hotel1 = priceHotel
                break;
            case 1:
                hotel2 = priceHotel
                break;
            case 2:
                hotel3 = priceHotel
                break;
        }
        if(priceHotel < Highest){
            lowerPrice = priceHotel
            Highest = priceHotel
        }
    })
    return lowerPrice, hotel1, hotel2, hotel3
}

function getBestHotel(lowerPrice, hotel1, hotel2, hotel3){
    // get a array only with names
    getNames = []
    hotelBase.forEach((hotel, i, array) =>{
        getNames += array[i].name +  ","
    })
    // Split Array
    const hotelNames = getNames.split(',')
    // Checks equality of values ​​to return the hotel with higher quality
    if(hotel1 === hotel2){ return hotelNames[1] }
    if(hotel2 === hotel3){ return hotelNames[2] }
    if(hotel3 === hotel1){ return hotelNames[2] }
    else {
        if(lowerPrice === hotel1){
                return hotelNames[0]
        }
        if(lowerPrice === hotel2){
                return hotelNames[1]
        }
        if(lowerPrice === hotel3){
                return hotelNames[2]
        }
    }
}



function getCheapestHotel (input) { //DO NOT change the function's name.
    const [type, listDates] = separeteClientsAndDates(input);
    getPriceArray(type, listDates);
    const bestHotel = getBestHotel(lowerPrice, hotel1, hotel2, hotel3)
    return bestHotel;
}

exports.getCheapestHotel = getCheapestHotel
