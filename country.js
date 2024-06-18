const countrydata=new URLSearchParams(location.search).get('name');
const backButton=document.querySelector('.back-button');
const themeChanger=document.querySelector('.mode');
const iconChanger=document.querySelector('.mode i');
const modeWord=document.querySelector('#mode-word');

console.log(countrydata);
const countryDetails=document.querySelector('.country-details');
fetch(`https://restcountries.com/v3.1/name/${countrydata}?fullText=true`)
.then((response)=>response.json())
.then((data)=>{
   
//   console.log(data)
    countryDetails.innerHTML=`
                <img src="${data[0].flags.svg}" alt="${data[0].flags.alt}">
                <div class="details-text-container">
                    <h1>${data[0].name.common}</h1>
                    <div class="details-text">
                        <p><b>Native Name: </b>${Object.values(data[0].name.nativeName)[0].official}</p>
                        <p><b>Region: </b>${data[0].region}</p>
                        <p><b>Population: </b>${data[0].population.toLocaleString('en-IN')}</p>
                        <p><b>Sub Region: </b>${data[0].subregion}</p>
                        <p><b>Capital: </b>${data[0].capital}</p>
                        <p><b>Top Level Domain: </b>${data[0].tld.join(", ")}</p>
                        <p><b>Currencies: </b>${Object.values(data[0].currencies)[0].name}</p>
                        <p><b>Languages: </b>${Object.keys(data[0].languages).join(", ")}</p>
    
                    </div>
                    <div class="border-content">
                        <b>Border Countries:</b>
    
                    </div>
                </div>
            `
            const borderContent=document.querySelector('.border-content');
            const message='No border countries. '
            if(data[0].borders){
                data[0].borders.forEach((border) => {
                    fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                    .then((res)=>res.json())
                    .then(([borderData])=>{
                        const borderTag=document.createElement('a');
                        borderTag.href=`/country.html?name=${borderData.name.common}`
                        borderTag.innerHTML=`${borderData.name.common}`;
                        borderContent.append(borderTag)
                    });
                });
                
            }
            else{
            borderContent.append(message);
            }
})

backButton.addEventListener('click',()=>{
   history.back();
})

let themeValue=localStorage.getItem('theme')==='true';
console.log(themeValue);
if(themeValue){
  document.body.classList.remove('dark');
  iconChanger.classList.add('fa-moon');
  modeWord.innerText = "Dark";
}
else {
  document.body.classList.add('dark');
  iconChanger.classList.remove('fa-moon');
  iconChanger.classList.add('fa-sun');
  modeWord.innerText = "Light";
}
themeChanger.addEventListener('click',()=>{
    themeValue=!themeValue;
    localStorage.setItem('theme',themeValue);
    document.body.classList.toggle('dark');
    iconChanger.classList.toggle('fa-moon');
    iconChanger.classList.toggle('fa-sun');
 
    if(modeWord.innerText == "Dark"){
     modeWord.innerText="Light ";
    }
    else if(modeWord.innerText == "Light"){
     modeWord.innerText="Dark ";
    }
})
// &nbsp;<a href="#">${data[0].borders[0]}</a><a href="#">Germany</a>