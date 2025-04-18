const convertButton = document.querySelector(".convert-button")

const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueToConverted = document.querySelector(".currency-value")
    

    const dolarToday = 5.2
    const euroToday = 6.2



if(currencySelect.value == "dolar") {
   currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style:"currency",
        currency:"USD"
    }).format( inputCurrencyValue / dolarToday)

}

if(currencySelect.value == "euro") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style:"currency",
        currency:"EUR"
    }).format(inputCurrencyValue / euroToday)
}


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency:"BRL"
    }).format(inputCurrencyValue) 
}

    function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")    

    if(currencySelect.value == "dola") {
        currencyName.innerHTML = "Dóla"
        currencyImage.src = "./assets/dola.png"
    }

    if(currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    convertValues()
  
}


currencySelect.addEventListener("change" , changeCurrency)
convertButton.addEventListener("click", convertValues)