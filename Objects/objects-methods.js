//method is an object property who's value is a function. 

let restuarant = {
    name: 'cool hipster restuarant',
    guestCapacity: 75,
    guestCount: 0,

    
    checkAvail: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },

    seatParty: function(partySize) {
        this.guestCount = this.guestCount + partySize;
    },

    removeParty: function(partySize) {
        this.guestCount = this.guestCount - partySize;

    }
    
}


restuarant.seatParty(72);
console.log(restuarant.checkAvail(4));
restuarant.removeParty(5);
console.log(restuarant.checkAvail(4));

