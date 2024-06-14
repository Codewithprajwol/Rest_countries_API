const countrydata=new URLSearchParams(window.location.search).get('name');
console.log(countrydata);

fetch(`https://restcountries.com/v3.1/name/${countrydata}?fullText=true`)
.then((response)=>response.json())
.then((data)=>console.log(data))