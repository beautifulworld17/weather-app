// mapbox api key  - pk.eyJ1IjoicHJhajE3IiwiYSI6ImNrcTBqemlhZzA1azkyd3Fpbzh1N2N3M2kifQ.cn7OkKiobJ2Amz0cWh8RUw

const request=require('request')

const geocode= (address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoicHJhajE3IiwiYSI6ImNrcTBqemlhZzA1azkyd3Fpbzh1N2N3M2kifQ.cn7OkKiobJ2Amz0cWh8RUw'
    request({url,json: true},(err,{body})=>{
    if(err){
        callback('Unable to fetch 1!!!',undefined)
    }else if(body.features.length ===0){
        callback('Unable to fetch 2!!!',undefined)
    }
    else{
        const data={
            lat: body.features[0].center[1],
            lon: body.features[0].center[0],
            place: body.features[0].place_name
        }
        // console.log(data);
        callback(undefined, data)
    }
        
    })
}

module.exports=geocode

// without callback
// const url2='https://api.mapbox.com/geocoding/v5/mapbox.places/koppa,india.json?access_token=pk.eyJ1IjoicHJhajE3IiwiYSI6ImNrcTBqemlhZzA1azkyd3Fpbzh1N2N3M2kifQ.cn7OkKiobJ2Amz0cWh8RUw'

// request({url: url2,json: true},(err,response)=>{
//     if(err){
//         console.log("Unable to fetch!!!");
//     }else{
//         const lat=response.body.features[0].center[0]
//         const lon=response.body.features[0].center[1]
//         const place=response.body.features[0].place_name
//         console.log(place+" : lattitude = "+lat+"  longitude = "+lon);
//     }

//     })