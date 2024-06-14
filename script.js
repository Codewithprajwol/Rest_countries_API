const countriesContainer=document.querySelector('.countries-container');

fetch('https://restcountries.com/v3.1/all')
.then((response)=>response.json())
.then((datas)=>{
    console.log(datas);
    datas.forEach((country) => {
      const countryCard=document.createElement('a');
      countryCard.classList.add("country-card");
      countryCard.href=`country.html?name=${country.name.common}`
      countryCard.innerHTML=` <img src="${country.flags.svg}" alt="flag">
                  <div class="card-text">
                    <h3 class="card-title">${country.name.common}</h3>
                    <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
                    <p><b>Region: </b>${country.region}</p>
                    <p><b>Capital: </b>${country.capital?.[0]}</p>
                  </div>
                 `;
      countriesContainer.append(countryCard); 
    });
});
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

var a =111111111;