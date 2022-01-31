const button = document.getElementById('convert-button')
const select = document.getElementById('select-currency')

const dolar = 5.30
const euro = 5.96


const convertvalues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if (select.value === 'US$ Dólar Americano') {
        const currencyValueText = document.getElementById('currency-value-text')
        currencyValueText.innerHTML = new Intl.NumberFormat('en-us', {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)
    } else if (select.value === '€ Euro') {
        const currencyValueText = document.getElementById('currency-value-text')
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)
    }





}

changeCurrency = () => {
    const currencyname = document.getElementById('currency-name')
    const currencyimg = document.getElementById('currency-img')

    if (select.value === "US$ Dólar Americano") {
        currencyname.innerHTML = 'Dólar'
        currencyimg.src = './assets/estados-unidos (1) 1.png'
    }

    if (select.value === "€ Euro") {
        currencyname.innerHTML = 'Euro'
        currencyimg.src = './assets/Euro.png'
    }
    convertvalues()
}



button.addEventListener('click', convertvalues)
select.addEventListener('change', changeCurrency)