fetch('http://localhost:3000/weather?address=koppa,chikmagalur,karnataka').then((response)=>{
    response.json().then((data) =>{
        if(data.error){
            console.log(data.error);
        }else{
            console.log(data.temperature);
            console.log(data.feelslike);

        }
    })
})
