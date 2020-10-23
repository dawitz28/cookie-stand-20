'use strict';

// number of cookies to make based on bisiness hours 6am - 8pm
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var parentElement = document.getElementById('solmon cookies-page');
var SalmonCookiesTable = document.getElementById('salmon-table');
console.log(SalmonCookiesTable);

//Salmon Cookies Constructor
function Store(name, minCust, maxCust, avgHourlyCookies){
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgHourlyCookies = avgHourlyCookies;
    this.cookiesPerHourArray = [];
    this.finalDailySales = 0;
    this.randomNumCust = function (){
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    };
    this.calcCookiesPerHourArray = function(){
        for (var i = 0; i < hours.length; i++){
            var hourlyCookies = Math.ceil(this.randomNumCust() * this.avgHourlyCookies); 
            this.cookiesPerHourArray.push(hourlyCookies);
            this.finalDailySales += hourlyCookies; 
        }
    };

    this.render = function(){
        this.calcCookiesPerHourArray();
        //create row
        var tr = document.createElement('tr');
        SalmonCookiesTable.appendChild(tr);
        //give it content 
        var td = document.createElement('td');
        //give td content
        td.textContent = this.name;
        //append to row
        tr.appendChild(td);
        //create tds for cookies per hour
        for (var i = 0; i < hours.length; i++){
            td = document.createElement('td');
            td.textContent = this.cookiesPerHourArray[i];
            tr.appendChild(td);
        }
        //give tds content
        td = document.createElement('td');
        //append to the row
        td.textContent = this.finalDailySales
        tr.appendChild(td);
        //append to dom 
        SalmonCookiesTable.appendChild(tr);
    }
}

function renderHeader(){
    var tr = document.createElement('tr');
    SalmonCookiesTable.appendChild(tr);
    //give it content 
    var td = document.createElement('td');
    //give td content
    td.textContent = '  ';
    //append to row
    tr.appendChild(td);
    //create tds for cookies per hour
    for (var i = 0; i < hours.length; i++){
        td = document.createElement('td');
        td.textContent = hours[i];
        tr.appendChild(td);
    }
    //give tds content
    td = document.createElement('td');
    //append to the row
    td.textContent = 'Total';
    tr.appendChild(td);
    //append to dom 
    SalmonCookiesTable.appendChild(tr);
}

var tfoot = document.createElement('tfoot');
var td =document.createElement(td);
td.textContent = 'Total';
tfoot.appendChild(td);
SalmonCookiesTable.appendChild(tfoot);

var seattle = new Store('Seattle',23, 65, 6.3);
var tokyo = new Store('Tokyo',3, 24, 1.2);
var dubai = new Store('Dubai', 11, 38, 3.7);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

renderHeader();
seattle.render(); 
tokyo.render(); 
dubai.render(); 
paris.render(); 
lima.render(); 
