var inputvalue= document.querySelector('#cityinput')
var btn=document.querySelector('#add');
var city=document.querySelector('#cityoutput')
var descrip =document.querySelector('#description')
var temp=document.querySelector('#temp')
var wind=document.querySelector('#wind')
apik="3578ffe565ac02948ef64104c131e4f5"
function conversion(val)
{
    return(val-273).toFixed(3)
}

btn.addEventListener('click',function()
{
    fetch ('https://api.openweathermap.org/data/2.5/weather?'+inputvalue.value+'&appid='+apik )
        .then(res=> res.json())

        .then(data=>
        {
            var nameval=data['name']
            var descrip=data['weather']['0']['description']
            var temperature=data['main']['temp']
            var windspeed=data['wind']['speed']

            city.innerHTML='Weather of <span> $ {nameval}<span>'
            temp.innerHTML='temperature: <span> ${conversion(temperature)}C</s'
            description.innerHTML='Sky condition:<span> ${descrip}<span>'
            wind.innerHTML='Wind speed:<span> ${windspeed} km/h<span>'
        }
        )
        .catch(err=> alert('you entered wrong city name'))
    
})
