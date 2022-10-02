let submitButton = document.getElementById("countrysubmit");
let outputBox = document.getElementById("country-output");
let countrySelected = document.getElementById("country");
//let selectedCountry = document.getElementById("country");

/*
submitButton.addEventListener("click", () => {
  let output = selectedCountry.selectedOptions;
  console.log(output[0].label);
  if (output[0].label === "Choose...") {
    outputText = "You didn't select country!";
    console.log("empty");
  } else if(){

  } else if(){

  }
  {
    outputText = `Your order for the following items has been placed: ${output[0].label}` ;
    console.log("not empty");
  }
  outputBox.innerHTML = outputText;

}, false);
*/
console.log(countrySelected);
countrySelected.addEventListener("change", () => {
    let output = countrySelected.selectedOptions;
    console.log(countrySelected);
    if (output[0].label === "Choose...") {
      outputText = "You didn't select country! 😲";
      outputText = console.log("empty");
    } else if (output[0].label==="Schengen Area Countries"){  
      "It's Visa Free Zone! 🤩"
    } else if (output[0].label==="Other"){
        outputText = "You need a Schengen Visa to go to Europe. 😂"

    }
    {
      outputText = `The ${output[0].label} citizenship holder don’t need a Schengen Visa to Enter Europe for limited days.😄` ;
      console.log("not empty"); 
    }
    outputBox.innerHTML = outputText;
  
  }, false);



/*
submitButton.addEventListener("click", () => {
    let collection = selectedCountry.selectedOptions;
    let output = "";
  
    for (let i = 0; i < collection.length; i++) {
      if (output === "") {
        output = "Your order for the following items has been placed: ";
      }
      output += collection[i].label;
  
      if (i === (collection.length - 2) && (collection.length < 3)) {
        output +=  " and ";
      } else if (i < (collection.length - 2)) {
        output += ", ";
      } else if (i === (collection.length - 2)) {
        output += ", and ";
      }
    }
  
    if (output === "") {
      output = "You didn't order anything!";
    }
  
    outputBox.innerHTML = output;
  }, false);
  */

  
 const str = `Albania*
 Andorra
 Antigua and Barbuda
 Argentina
 Australia
 Bahamas
 Barbados
 Bosnia and Herzegovina*
 Brazil
 Brunei
 Canada
 Chile
 Colombia
 Costa Rica
 Dominica
 El Salvador
 Georgia
 Grenada
 Guatemala
 Holy See (Vatican City State)
 Honduras
 Hong Kong S.A.R***
 Israel
 Japan
 Kiribati
 Macao S.A.R***
 Malaysia
 Marshall Islands
 Mauritius
 Mexico
 Micronesia
 Moldova*
 Monaco
 Montenegro*
 Nauru
 New Zealand
 Nicaragua
 North Macedonia*
 Palau
 Panama
 Paraguay
 Peru
 Saint Kitts and Nevis
 Saint Lucia
 Saint Vincent
 Samoa
 Serbia*
 Seychelles
 Singapore
 Solomon Islands
 South Korea
 Taiwan**
 Timor Leste
 Tonga
 Trinidad and Tobago
 Tuvalu
 Ukraine
 United Arab Emirates
 United Kingdom
 United States of America
 Uruguay
 Vanuatu****
 Venezuela
 `;