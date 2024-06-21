const findTheOldest = function(peeps) {
    const d = new Date();
    let year = d.getFullYear();
    
    peeps.sort((a,b) => { 
        if(a.yearOfDeath == null) a.yearOfDeath = year;
        if(b.yearOfDeath == null) b.yearOfDeath = year;
        return (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) ? -1 : 1;
    });
    return peeps[0];
};

// Do not edit below this line
module.exports = findTheOldest;
