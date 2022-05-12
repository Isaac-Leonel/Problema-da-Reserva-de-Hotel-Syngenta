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
// Get the cheapest hotel
function getCheapest (type, listDate){
    let getHotelPrices = []
    let getquality = []
    hotelBase.forEach((hotel) =>{
        const priceHotel = getAllPrices(type, hotel, listDate)
        getHotelPrices.push(priceHotel)
    })
    const hotelPrices = getHotelPrices
    if((new Set(hotelPrices)).size !== hotelPrices.length){
        hotelPrices.forEach((price, i) => {
            if(price == Math.min(...hotelPrices)){
                hotelBase.forEach((hotel, n, array) =>{
                    getquality.push(array[i].quality)
                })
            }
        })
        hotelBase.map((hotel, i, array) =>{
            if(Math.max(...getquality) === hotel.quality){
                getBestHotel = array[i].name
            }
        })
    }else getHotelPrices.forEach((price, i) =>{
        if(price == Math.min(...getHotelPrices)){
            hotelBase.forEach((hotel, n, array) =>{
                getBestHotel = array[i].name
            })
        }
    })
    return getBestHotel
}
function getCheapestHotel (input) { //DO NOT change the function's name.
    const [type, listDates] = separeteClientsAndDates(input);
    return getCheapest(type, listDates);
}

exports.getCheapestHotel = getCheapestHotel
