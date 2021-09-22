console.log("Working Properly");

var pizzaId = document.getElementById('pizzaId');
var ramenId = document.getElementById('ramenId');
var sushiId = document.getElementById('sushiId');
var sandwichId = document.getElementById('sandwichId');

var xhr = new XMLHttpRequest();

var pizafun = pizzaId.addEventListener('mouseenter', pizzaClickHandler, false);
var ramenfun = ramenId.addEventListener('mouseenter', ramenClickHandler, false);
var sushifun = sushiId.addEventListener('mouseenter', sushiClickHandler, false);
var sandwichIdfun = sandwichId.addEventListener('mouseenter', sandwhichClickHandler, false);

function pizzaClickHandler() {
    console.log('pizzaClickHandler Working');
    xhr.open('GET', 'txt/pizza.txt', true);
    xhr.onload = function () {
        if (this.status === 200) {
            document.getElementById('pizzaText').innerHTML = this.responseText;
            console.log(this.responseText)
        } else {
            console.log("No Data Available")
        }
    }
    xhr.send();
}

function ramenClickHandler() {
    console.log('ramenClickHandler Working');
    xhr.open('GET', 'txt/ramen.txt', true);
    xhr.onload = function () {
        if (this.status === 200) {
            document.getElementById('ramenText').innerHTML = this.responseText;
            console.log(this.responseText)
        } else {
            console.log("No Data Available")
        }
    }
    xhr.send();
}

function sandwhichClickHandler() {
    console.log('sandwhcihClickHandler Working');
    xhr.open('GET', 'txt/Sandwich.txt', true);
    xhr.onload = function () {
        if (this.status === 200) {
            document.getElementById('sandwhichText').innerHTML = this.responseText;
            console.log(this.responseText)
        } else {
            console.log("No Data Available")
        }
    }
    xhr.send();
}

function sushiClickHandler() {
    console.log('sushiClickHandler Working');
    xhr.open('GET', 'txt/Sushi.txt', true);
    xhr.onload = function () {
        if (this.status === 200) {
            document.getElementById('sushiText').innerHTML = this.responseText;
            console.log(this.responseText)
        } else {
            console.log("No Data Available")
        }
    }
    xhr.send();
}
