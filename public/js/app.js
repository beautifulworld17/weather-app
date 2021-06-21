// alert("hello")
console.log('Client side javascript file is loaded!')


const weatherForm= document.querySelector('form')
const search= document.querySelector('input')
const tempMsg=document.querySelector('#temp')
const flMsg=document.querySelector('#feels')


weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const location= search.value
    console.log(location);


    tempMsg.textContent= ''
    flMsg.textContent=''
    tempMsg.textContent= 'Loading...'


    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data) =>{
        if(data.error){
            console.log(data.error);
            tempMsg.textContent=data.error
        }else{
            tempMsg.textContent= "Current Temperature is "+data.temperature+" `C"
            flMsg.textContent= "But feels like "+data.feelslike+" `C"

            console.log(data);
        }
    })
})

})


