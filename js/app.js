'use strict';
let time = ["6am","7am","8am","9am","10am", "11am", "12pm", "1pm","2pm","3pm", "4pm", "5pm", "6pm", "7pm"];

function getRandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

function cookiesPerHr(min,max,avgCookies){
    let sales = []
    for (let i = 0; i < 14; i++) {
        let customers = getRandInt(min,max)*avgCookies
        sales.push(Math.ceil(customers))
    }
    
    return sales;
}

function sumAnyArray(array) {
    let sum = array[0] + array[1];
    for (let i = 2; i < array.length; i++) {
      sum = sum + array[i]
    }
    return sum;
}

function createList(time,array,shop) {
        for (let i = 0; i < array.length; i++){
        let bullet = document.createElement('li')
        let location = document.getElementById(shop)
        bullet.textContent = `${time[i]}: ${array[i]} Cookies`
        location.appendChild(bullet)
    }
        
}
//Shops
let seattle = {
    name: "Seattle",
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,
    sales: cookiesPerHr(23,65,6.3),
}

createList(time,seattle.sales,seattle.name);
let seattleBullet = document.createElement('li');
let seattleSum = document.getElementById(seattle.name);
seattleBullet.textContent = "Total sales: " + sumAnyArray(seattle.sales); 
seattleSum.appendChild(seattleBullet);




let tokyo = {
    name: "Tokyo",
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
    sales: cookiesPerHr(3,24,1.2)
};

createList(time,tokyo.sales,tokyo.name);
let tokyoBullet = document.createElement('li');
let tokyoSum = document.getElementById(tokyo.name);
tokyoBullet.textContent = "Total sales: " + sumAnyArray(tokyo.sales); 
tokyoSum.appendChild(tokyoBullet);


let dubai = {
    name: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.7,
    sales: cookiesPerHr(11,38,3.7)
};

createList(time,dubai.sales,dubai.name);
let dubaiBullet = document.createElement('li');
let dubaiSum = document.getElementById(dubai.name);
dubaiBullet.textContent = "Total sales: " + sumAnyArray(dubai.sales); 
dubaiSum.appendChild(dubaiBullet);

let paris = {
    name: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookie: 2.3,
    sales: cookiesPerHr(20,38,2.3)
};

createList(time,paris.sales,paris.name);
let parisBullet = document.createElement('li');
let parisSum = document.getElementById(paris.name);
parisBullet.textContent = "Total sales: " + sumAnyArray(paris.sales); 
parisSum.appendChild(parisBullet);

let lima = {
    name: "Lima",
    minCust: 2,
    maxCust: 16,
    avgCookie: 4.6,
    sales: cookiesPerHr(2,16,4.6)
};

createList(time,lima.sales,lima.name);
let limaBullet = document.createElement('li');
let limaSum = document.getElementById(lima.name);
limaBullet.textContent = "Total sales: " + sumAnyArray(lima.sales); 
limaSum.appendChild(limaBullet);
