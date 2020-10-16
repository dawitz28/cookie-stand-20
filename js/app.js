'use strict';
// console.log('hello world');

// number of cookies each location make each
// max number of customers per hour
// the average number of cookies purchesed per customers
// add and remove locations from daily report, numbers of each location day of the week, special events ..
// construction of a public facing page (home page) logo provided,
// build an app that calculates daily sales for each location on sales.html page
// create homepage index.html 


Function Store(name, minCust, maxCust, avgCookiesCust){
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookiesHour = avgCookiesHour;
    this.custPerHourArray = [];
    this.finalDailySales = 0;
}
// number of cookies to make based on bisiness hours 6am - 8pm

Var hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',];

// min number of customers per hour  use the math.random number 
