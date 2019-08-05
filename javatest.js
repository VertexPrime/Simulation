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
        let destination = MYAPP.places[0]; //Math.random() * MYAPP.places.length
        this.currentPlace = destination;

        destination.visitors.push(this);
    }

    this.name = 'Jack';
    this.homeLocation;
    this.update = function () {
    }
}

MYAPP.people = []; // all the spawned persons

MYAPP.places = []; // all available places in the app

MYAPP.place = function () {
    this.name = 'Bar';
    this.visitors = [];

    this.get_name = function () {
        return this.name;
    }
    this.get_visitors = function () {
        let visitorNames = [];
        for (i = 0; i < this.visitors.length; i++) {
            visitorNames.push(this.visitors[i].name);
        }

        return visitorNames;
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

MYAPP.draw = function () {
    document.getElementById('places').innerHTML = MYAPP.places.length;
    document.getElementById('people').innerHTML = MYAPP.people.length;
    document.getElementById('places__names').innerHTML = MYAPP.places[0].get_name();
    document.getElementById('place__visitors__number').innerHTML = MYAPP.places[0].visitors.length;
    document.getElementById('place__visitors').innerHTML = MYAPP.places[0].get_visitors();
}

// start loop

MYAPP.populate(3);
MYAPP.places.push(new MYAPP.place());

for(i = 0; i < MYAPP.people.length; i++) {
    MYAPP.people[i].move();
}

setInterval(onTick, 500);

function onTick() {
    MYAPP.updatePeople();
    MYAPP.draw();
}