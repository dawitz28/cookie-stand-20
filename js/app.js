'use strict';
// console.log('hello world');
// min number of customers per hour 
// max number of customers per hour
// add and remove locations from daily report, numbers of each location day of the week, special events ..
// construction of a public facing page (home page) logo provided,
// build an app that calculates daily sales for each location on sales.html page
// create homepage index.html 

// number of cookies to make based on bisiness hours 6am - 8pm

var storeHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var seattleUl = document.getElementById('seattle');
var tokyoUl = document.getElementById('tokyo');
var dubaiUl = document.getElementById('dubai');
var parisUl = document.getElementById('paris');
var limaUl = document.getElementById('lima');

var seattle = {
    minCust: 23,
    maxCust: 65, 
    avgHourlyCookies: 6.3,
    cookiesPerHourArray:[],
    finalDailySales: 0,
    
    // number of cookies each location make min and max. use Math.random()
    randomNumCust : function (){
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },
    // the average number of cookies purchesed per customers
    calcCookiesPerHourArray: function(){
        for (var i = 0; i < storeHours.length; i++){
            var hourlyCookies = Math.ceil(this.randomNumCust() * this.avgHourlyCookies); 
            this.cookiesPerHourArray.push(hourlyCookies);
            this.finalDailySales += hourlyCookies; 
        }
        console.log('calc the amount of cookies bought per hour:', hourlyCookies);
    },
    render: function(){
        this.calcCookiesPerHourArray();

        for (var i = 0; i < storeHours.length; i++){
            var li = document.createElement('li');

            li.textContent = `${storeHours[i]}:${this.cookiesPerHourArray[i]} cookies`;

            seattleUl.appendChild(li);

        }
        li = document.createElement('li');

        li.textContent = ` Total: ${this.finalDailySales} cookies`;

        seattleUl.appendChild(li);
    }
};
var tokyo = {
    minCust: 3,
    maxCust: 24, 
    avgHourlyCookies: 1.2,
    cookiesPerHourArray:[],
    finalDailySales: 0,
    
    // number of cookies each location make min and max. use Math.random()
    randomNumCust : function (){
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },
    // the average number of cookies purchesed per customers
    calcCookiesPerHourArray: function(){
        for (var i = 0; i < storeHours.length; i++){
            var hourlyCookies = Math.ceil(this.randomNumCust() * this.avgHourlyCookies); 
            this.cookiesPerHourArray.push(hourlyCookies);
            this.finalDailySales += hourlyCookies; 
        }
        console.log('calc the amount of cookies bought per hour:', hourlyCookies);
    },
    render: function(){
        this.calcCookiesPerHourArray();

        for (var i = 0; i < storeHours.length; i++){
            var li = document.createElement('li');

            li.textContent = `${storeHours[i]}:${this.cookiesPerHourArray[i]} cookies`;

            tokyoUl.appendChild(li);

        }
        li = document.createElement('li');

        li.textContent = ` Total: ${this.finalDailySales} cookies`;

        tokyoUl.appendChild(li);
    }
};
var dubai = {
    minCust: 11,
    maxCust: 38, 
    avgHourlyCookies: 3.7,
    cookiesPerHourArray:[],
    finalDailySales: 0,
    
    // number of cookies each location make min and max. use Math.random()
    randomNumCust : function (){
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },
    // the average number of cookies purchesed per customers
    calcCookiesPerHourArray: function(){
        for (var i = 0; i < storeHours.length; i++){
            var hourlyCookies = Math.ceil(this.randomNumCust() * this.avgHourlyCookies); 
            this.cookiesPerHourArray.push(hourlyCookies);
            this.finalDailySales += hourlyCookies; 
        }
        console.log('calc the amount of cookies bought per hour:', hourlyCookies);
    },
    render: function(){
        this.calcCookiesPerHourArray();

        for (var i = 0; i < storeHours.length; i++){
            var li = document.createElement('li');

            li.textContent = `${storeHours[i]}:${this.cookiesPerHourArray[i]} cookies`;

            dubaiUl.appendChild(li);

        }
        li = document.createElement('li');

        li.textContent = ` Total: ${this.finalDailySales} cookies`;

        dubaiUl.appendChild(li);
    }
};
var paris = {
    minCust: 20,
    maxCust: 38, 
    avgHourlyCookies: 2.3,
    cookiesPerHourArray:[],
    finalDailySales: 0,
    
    // number of cookies each location make min and max. use Math.random()
    randomNumCust : function (){
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },
    // the average number of cookies purchesed per customers
    calcCookiesPerHourArray: function(){
        for (var i = 0; i < storeHours.length; i++){
            var hourlyCookies = Math.ceil(this.randomNumCust() * this.avgHourlyCookies); 
            this.cookiesPerHourArray.push(hourlyCookies);
            this.finalDailySales += hourlyCookies; 
        }
        console.log('calc the amount of cookies bought per hour:', hourlyCookies);
    },
    render: function(){
        this.calcCookiesPerHourArray();

        for (var i = 0; i < storeHours.length; i++){
            var li = document.createElement('li');

            li.textContent = `${storeHours[i]}:${this.cookiesPerHourArray[i]} cookies`;

            parisUl.appendChild(li);

        }
        li = document.createElement('li');

        li.textContent = ` Total: ${this.finalDailySales} cookies`;

        parisUl.appendChild(li);
    }
};
var lima = {
    minCust: 2,
    maxCust: 16, 
    avgHourlyCookies: 4.6,
    cookiesPerHourArray:[],
    finalDailySales: 0,
    
    // number of cookies each location make min and max. use Math.random()
    randomNumCust : function (){
        return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    },
    // the average number of cookies purchesed per customers
    calcCookiesPerHourArray: function(){
        for (var i = 0; i < storeHours.length; i++){
            var hourlyCookies = Math.ceil(this.randomNumCust() * this.avgHourlyCookies); 
            this.cookiesPerHourArray.push(hourlyCookies);
            this.finalDailySales += hourlyCookies; 
        }
        console.log('calc the amount of cookies bought per hour:', hourlyCookies);
    },
    render: function(){
        this.calcCookiesPerHourArray();

        for (var i = 0; i < storeHours.length; i++){
            var li = document.createElement('li');

            li.textContent = `${storeHours[i]}:${this.cookiesPerHourArray[i]} cookies`;

            limaUl.appendChild(li);

        }
        li = document.createElement('li');

        li.textContent = ` Total: ${this.finalDailySales} cookies`;

        limaUl.appendChild(li);
    }
};

seattle.render(); 
tokyo.render(); 
dubai.render(); 
paris.render(); 
lima.render(); 

    























// Function Store(name, minCust, maxCust, avgCookiesCust){
//     this.name = name;
//     this.minCust = minCust;
//     this.maxCust = maxCust;
//     this.avgCookiesHour = avgCookiesHour;
//     this.custPerHourArray = [];
//     this.finalDailySales = 0;
// }