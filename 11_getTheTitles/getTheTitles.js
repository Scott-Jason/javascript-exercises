const getTheTitles = function(books) {
    const bookNames = [];
    books.map(obj => bookNames.push(obj.title));
    return bookNames;
};

// Do not edit below this line
module.exports = getTheTitles;
