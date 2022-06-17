'use strict';
let time = ["", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "total"];

function getRandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

function cookiesPerHr(name, min, max, avgCookies) {
    let sales = [name]
    for (let i = 0; i < 14; i++) {
        let customers = getRandInt(min, max) * avgCookies
        sales.push(Math.ceil(customers))
    }
    sales.push(sumAnyArray(sales));//adding sum to array
    return sales;
}

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
    this.sales = cookiesPerHr(name, min, max, avg);
    allShops.push(this);
}

let seattle = new shop('Seattle', 23, 65, 6.3);

let tokyo = new shop('Tokyo', 3, 24, 1.2);

let dubai = new shop('Dubai', 11, 38, 3.7);

let paris = new shop('Paris', 20, 38, 2.3);

let lima = new shop('Lima', 2, 16, 4.6);



let hourlyTotal = ["Hourly total"];
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
function hourlyTotals(array) {
    for (let i = 1; i < array.length; i++) {
        let total = seattle.sales[i] + tokyo.sales[i] + dubai.sales[i] + paris.sales[i] + lima.sales[i];
        hourlyTotal.push(total);
    }

}
hourlyTotals(seattle.sales);
console.log(hourlyTotal);


function totalRender(array) {
    for (let i = 0; i < array.length; i++) {
        let rowName = document.getElementById('totals');
        let rowpush = document.createElement('td');
        rowName.appendChild(rowpush);
        rowpush.textContent = array[i];
    }
}
totalRender(hourlyTotal);
function shopRender(shop, array) {
    for (let i = 0; i < array.length; i++) {
        let rowName = document.getElementById(shop.name);
        let rowpush = document.createElement('td');
        rowName.appendChild(rowpush);
        rowpush.textContent = array[i];
    }
}
shopRender(seattle, seattle.sales);
shopRender(tokyo, tokyo.sales);
shopRender(dubai, dubai.sales);
shopRender(paris, paris.sales);
shopRender(lima, lima.sales);
