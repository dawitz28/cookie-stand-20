'use strict';

// number of cookies to make based on bisiness hours 6am - 8pm
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var parentElement = document.getElementById('solmon cookies-page');
var SalmonCookiesTable = document.getElementById('salmon-table');
var allStores = [];
// console.log(SalmonCookiesTable);

function renderHeader() {
    var tr = document.createElement('tr');
    SalmonCookiesTable.appendChild(tr);
    //give it content 
    var td = document.createElement('td');
    //give td content
    td.textContent = '  ';
    //append to row
    tr.appendChild(td);
    //create tds for cookies per hour
    for (var i = 0; i < hours.length; i++) {
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
//Salmon Cookies Constructor
function Store(name, minCust, maxCust, avgHourlyCookies) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgHourlyCookies = avgHourlyCookies;
    this.cookiesPerHourArray = [];
    this.finalDailySales = 0;
    allStores.push(this);
    this.randomNumCust = function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    };
    this.calcCookiesPerHourArray = function () {

        for (var i = 0; i < hours.length; i++) {
            var hourlyCookies = Math.ceil(this.randomNumCust() * this.avgHourlyCookies);
            this.cookiesPerHourArray.push(hourlyCookies);
            this.finalDailySales += hourlyCookies;
        }
    };

    this.render = function () {
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
        for (var i = 0; i < hours.length; i++) {
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
    };
}

// Render Table row for daily total hours
var renderFooterRow = function() {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = 'final daily sales:';
    tr.appendChild(td);

    for(var i = 0; i < hours.length; i++){
        
        var totalHours = 0;
        var tableInfo = document.createElement('td');

        for (var j = 0; j < allStores.length; j++) {
            totalHours += allStores[j].cookiesPerHourArray[i]
        }
        tableInfo.textContent = totalHours;
        tr.appendChild(tableInfo);
    };
    var total = 0;
    for(i = 0; i < allStores.length; i++){
        total += allStores[i].finalDailySales; 
    }
    td = document.createElement('td');
    td.textContent = total;
    tr.appendChild(td);
    SalmonCookiesTable.appendChild(tr); 
}

function renderAllStores() {
    for (var i = 0; i < allStores.length; i++) {
        allStores[i].render();
    }
}


// var tfoot = document.createElement('tfoot');
// var td = document.createElement(td);
// td.textContent = 'Total';
// tfoot.appendChild(td);
// SalmonCookiesTable.appendChild(tfoot);

new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);

renderHeader();
renderAllStores();
renderFooterRow();


