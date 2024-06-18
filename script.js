const countriesContainer=document.querySelector('.countries-container');
const filterByRegion=document.querySelector('#select');
const inputedValue=document.querySelector('#inpt');
const themeChanger=document.querySelector('.mode');
const iconChanger=document.querySelector('.mode i');
const modeWord=document.querySelector('#mode-word');

// location.reload();
let allDatas;
fetch('https://restcountries.com/v3.1/all')
.then((response)=>response.json())
.then((data)=>{
  allDatas=data;
  countriesAppender(data);
});

filterByRegion.addEventListener('change',(e)=>{
   fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
   .then((res)=>res.json())
   .then((data)=>{
    countriesAppender(data);
   })
})

inputedValue.addEventListener('input',(e)=>{
   const filteredCountries=allDatas.filter((data)=>data.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
    countriesAppender(filteredCountries);   
})

if (localStorage.getItem('theme') === null){
  
  localStorage.setItem('theme','true');
}
let themeValue=localStorage.getItem('theme')==='true';
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
      themeValue= !themeValue;
    localStorage.setItem('theme',themeValue)
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


function countriesAppender(data){
  countriesContainer.innerHTML=''
  data.forEach((country) => {
    const countryCard=document.createElement('a');
    countryCard.classList.add("country-card");
    countryCard.href=`country.html?name=${country.name.common}`
    countryCard.innerHTML=` <img src="${country.flags.svg}" alt="${country.name.common}">
                <div class="card-text">
                  <h3 class="card-title">${country.name.common}</h3>
                  <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
                  <p><b>Region: </b>${country.region}</p>
                  <p><b>Capital: </b>${country.capital?.[0]}</p>
                </div>
               `;
              //  console.log(countryCard);
    countriesContainer.append(countryCard); 
  });
}

function tediousTask(){
    const final=document.querySelector('.hero-section');

const countryCard=document.createElement('a');
countryCard.classList.add("country-card");

const image=document.createElement('img');
image.src="https://flagcdn.com/wf.svg";
image.alt="flag";

const cartText=document.createElement('div');
cartText.classList.add('card-text');

const heading3=document.createElement('h3')
heading3.classList.add('card-title');
heading3.innerText="Wallis and Futuna"


const bold=document.createElement('b');
bold.innerText="Population: "
const paragraph=document.createElement('p');
const textnode=document.createTextNode("81,770,990");
paragraph.append(bold);
paragraph.append(textnode);

const bold1=document.createElement('b');
bold1.innerText="Region: "
const paragraph1=document.createElement('p');
const textnode1=document.createTextNode("Europe");
paragraph1.append(bold1);
paragraph1.append(textnode1);

const bold2=document.createElement('b');
bold2.innerText="Capital: "
const paragraph2=document.createElement('p');
const textnode2=document.createTextNode("Berlin");
paragraph2.append(bold2);
paragraph2.append(textnode2);



// console.log(bold);
// paragraph.innerText="81,770,990"
// console.log(paragraph);
// console.log(heading3);

countryCard.append(image)
countryCard.append(cartText)
cartText.append(heading3)
cartText.append(paragraph)
cartText.append(paragraph1)
cartText.append(paragraph2)
final.append(countryCard)

}


// console.log(countryCard);

/* When you log countryCard to the console before setting its href and innerHTML, the console logs a reference to the countryCard element. If you then change the properties of countryCard after the console.log, the console will still display the current state of the element because it reflects the live state of the DOM element. */
