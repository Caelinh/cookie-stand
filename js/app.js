'use strict';
let time = ["", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "Total sales"];

function getRandInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

function sumAnyArray(array) {
    let sum = array[1] + array[2];
    for (let i = 3; i < array.length; i++) {
        sum = sum + array[i]
    }
    return sum;
}

let allShops = []

//Shops
function shop(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.salesPerHr = [];
    this.totalSales = 0;
    this.hourlyTotal = [];

    // allShops.push(this);
}
shop.prototype.cookiesPerHr = function () {
    for (let i = 0; i < time.length-2; i++) {
        let customers = getRandInt(this.min, this.max);
        let sales = Math.round(customers * this.avg);
        this.salesPerHr.push(sales);
        this.totalSales += sales;
    }
    this.salesPerHr.push(this.totalSales)
}


//creating the table header
function headingRender(time) {

    for (let i = 0; i < time.length; i++) {
        let header = document.getElementById('times');
        let headerData = document.createElement('th');
        header.appendChild(headerData);
        headerData.textContent = time[i];
    }
}
headingRender(time);

shop.prototype.shopRender = function () {
    //new row
    let bodyName = document.getElementById("body");
    let newRow = document.createElement('tr');
    bodyName.appendChild(newRow);

    //name cell
    let nameCell = document.createElement('td');
    
    nameCell.textContent = this.name;
    newRow.appendChild(nameCell);

    //adding sales data
    for (let i = 0; i < this.salesPerHr.length; i++) {
        let rowpush = document.createElement('td');
        
        newRow.appendChild(rowpush);
        rowpush.textContent = this.salesPerHr[i];
        //total per hour
       }
    console.log(seattle.hourlyTotal)
}
shop.prototype.renderTotals = function(){
    for (let i = 0; i < this.hourlyTotal.length; i++){
    let rowName = document.getElementById('totals');
    let totalPush = document.createElement('td');
    rowName.appendChild(totalPush)
    totalPush.textContent = this.hourlyTotal[i];
    console.log(this.hourlyTotal)
    }
}

shop.prototype.hourlyTotals = function () {
    for (let i = 0; i < this.salesPerHr.length; i++) {
     
     let total = seattle.salesPerHr[i] + tokyo.salesPerHr[i] + 
     dubai.salesPerHr[i] + paris.salesPerHr[i] + lima.salesPerHr[i]
     this.hourlyTotal.push(total);
    }
    
}

let formElement = document.getElementById('updateShop');

formElement.addEventListener('submit', function (event) {
    event.preventDefault();
    let location = event.target.location.value;
    let min = parseInt(event.target.minimum.value);
    let max = parseInt(event.target.maximum.value);
    let newavg = parseInt(event.target.average.value);
    let newShop = new shop(location, min, max, newavg);
    newShop.cookiesPerHr();
    newShop.shopRender();
    newShop.hourlyTotals();
})
//generating table hourly totals
let seattle = new shop('Seattle', 23, 65, 6.3);

let tokyo = new shop('Tokyo', 3, 24, 1.2);

let dubai = new shop('Dubai', 11, 38, 3.7);

let paris = new shop('Paris', 20, 38, 2.3);

let lima = new shop('Lima', 2, 16, 4.6);


seattle.cookiesPerHr();
tokyo.cookiesPerHr();
dubai.cookiesPerHr();
paris.cookiesPerHr();
lima.cookiesPerHr();
seattle.shopRender();
seattle.hourlyTotals();
tokyo.shopRender();
dubai.shopRender();
paris.shopRender();
lima.shopRender();
seattle.renderTotals();