// API key- 7e2b334fbca2ab5d3ef6791c1c3161cf

const request=require('request')

const forecast= (lat,lon,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=7e2b334fbca2ab5d3ef6791c1c3161cf&query='+encodeURIComponent(lat+','+lon)
// console.log(url);
    request({url,json: true},(err,{body})=>{
    if(err){
        callback('Unable to fetch 3!!!',undefined)
    }else if(body.error){
        callback('Unable to fetch 4!!!',undefined)
    }
    else{
        const data={
            temperature: body.current.temperature,
            feelslike: body.current.feelslike,
            loc: body.location.name
        }
        callback(undefined, data)
        
    }
})
}

module.exports=forecast

// without callback
// const url1='http://api.weatherstack.com/current?access_key=7e2b334fbca2ab5d3ef6791c1c3161cf&query=koppa,india'

// request({url: url1,json: true},(err,response)=>{
//     if(err){
//         console.log("Unable to fetch!!!");
//     }else{
//         console.log("Current temperature is "+response.body.current.temperature+" f"+" but feels like "+response.body.current.feelslike);
//     }
// })