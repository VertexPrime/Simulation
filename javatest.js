const readline = require('readline');

let MYAPP = {};

MYAPP.person = function () {
    this.currentLocation;
    this.friends = [];
    this.meet = function () {
        talker = this.currentLocation.visitors[Math.random() * this.currentLocation.visitors.length];   // find a random person in the current place

        if(talker != this) {    // check if this is another person
            this.friends.push(talker);
        } else {
            this.meet();
        }
    }

    this.move = function () {
        this.currentPlace = MYAPP.places[Math.random() * MYAPP.places.length];
    }

    this.name = 'Jack';
    this.homeLocation;
    this.update = function () {
        
    }
}

MYAPP.people = []; // all the spawned persons

MYAPP.places = []; // all available places in the app

MYAPP.place = function () {
    name = 'Bar';
    visitors = [];

    get_visitors = function () {
        for (i = 0; i < visitors.length; i++) {
            console.log(this.visitors[i].name);
        }
    }
}

MYAPP.populate = function (n) {
    let i;
    for(i = 0; i < n; i++) {
        MYAPP.people[i] = new MYAPP.person();
    }
}

MYAPP.updatePeople = function () {
    for(i = 0; i < MYAPP.people.length; i++) {
        MYAPP.people[i].update();
    }
}

MYAPP.inputHandle = function () {
    response = readline;
    if(response == 'people') {
        console.log(MYAPP.people.length);
    }
}

// start loop

MYAPP.populate(3);
new MYAPP.place();

setInterval(onTick, 1000);

function onTick() {
    MYAPP.inputHandle();

    MYAPP.updatePeople();
}