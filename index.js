var ul = document.getElementById("list");
var itName = document.getElementById("itemNames");
var oName = document.getElementById("names");
var bookTillDate = document.getElementById("dates");

var itemName = ["Yoga mat", "Sunglasses", "Laptop bag", "Purse", "Travel bag", "Bracelet", "Cross bracelet", "Gray/white scarf", "Green scarf", "Black pashmina", "Casual hat", "Winter hat", "Winter mittens", "Winter coat", "Winter vest", "Trench coat", "Leather jacket", "Black rain coat", "Blue hiking coat", "Robe","Yoga mat", "Sunglasses", "Laptop bag", "Purse", "Travel bag", "Bracelet", "Cross bracelet", "Gray/white scarf", "Green scarf", "Black pashmina", "Casual hat", "Winter hat", "Winter mittens", "Winter coat", "Winter vest", "Trench coat", "Leather jacket", "Black rain coat", "Blue hiking coat", "Robe","Yoga mat", "Sunglasses", "Laptop bag", "Purse", "Travel bag", "Bracelet", "Cross bracelet", "Gray/white scarf", "Green scarf", "Black pashmina", "Casual hat", "Winter hat", "Winter mittens", "Winter coat", "Winter vest", "Trench coat", "Leather jacket", "Black rain coat", "Blue hiking coat", "Robe","Adventure book", "Comedy Books", "Bycycles", "Alice Styles", "Travel bag", "Bracelet", "Cross bracelet", "Gray/white scarf", "Green scarf", "Black pashmina", "Casual hat", "Winter hat", "Winter mittens", "Winter coat", "Winter vest", "Trench coat", "Leather jacket", "Black rain coat", "Blue hiking coat", "Robe","Yoga mat", "Sunglasses", "Laptop bag", "Purse", "Travel bag", "Bracelet", "Cross bracelet", "Gray/white scarf", "Green scarf", "Black pashmina", "Casual hat", "Winter hat", "Winter mittens", "Winter coat", "Winter vest", "Trench coat", "Leather jacket", "Black rain coat", "Blue hiking coat", "Robe"]

var names = ["James", "Mary", "Robert", "John", "Patricia", "Jennifer", "Linda", "William", "David", "Barbara","Richard", "Joseph", "Susan", "Jessica", "Sarah", "Karen", "Thomas", "Christopher", "Charles", "Lisa","Daniel", "Betty", "Margaret", "Sandra", "Ashley", "Kimberly", "Emily", "Donna", "Michelle", "Joshua","Matthew", "Kenneth", "Dorothy", "Carol", "Amanda", "Melissa", "Deborah", "Stephanie", "Edward", "George","Anthony", "Jonathan", "Eric", "Stephen", "Larry", "Justin", "Scott", "Jacob", "Ryan", "Timothy","Mark", "Brandon", "Benjamin", "Samantha", "Emma", "Nicole", "Samuel", "Katherine", "Gary", "Ronald","Donald", "Frank", "Alexander", "Patrick", "Rachel", "Janet", "Dennis", "Ruth", "Shirley", "Jason","Steven", "Judith", "Evelyn", "Douglas", "Zachary", "Olivia", "Jerry", "Angela", "Jeffrey", "Rebecca","Paul", "Teresa", "Alice", "Mandy", "Walter", "Peter", "Victoria", "Maria", "Helen", "Sharon","Andrew", "Joe", "Amber", "Christina", "Kelly", "Diane", "Heather", "Anna", "Cynthia", "Laura"]

var tillDate = ["2018-11-15", "2017-10-15", "2015-05-09", "2018-11-15", "2017-10-15", "2015-05-09", "2018-11-15", "2017-10-15", "2015-05-09", "2019-04-09", "2018-11-15", "2017-10-16", "2015-01-09", "2018-01-15", "2017-10-05", "2015-02-11", "2018-11-01", "2016-10-01", "2015-05-09", "2019-04-09", "2019-11-15", "2017-10-17", "2015-03-09", "2018-01-14", "2017-01-25", "2015-02-12", "2018-11-02", "2015-10-11", "2011-05-09", "2019-03-09", "2018-12-15", "2017-10-18", "2015-08-09", "2018-01-13", "2017-02-10", "2015-02-27", "2018-11-03", "2017-10-21", "2012-05-09", "2019-02-09", "2018-01-15", "2017-10-19", "2015-06-09", "2018-01-25", "2017-03-08", "2015-02-26", "2018-11-04", "2018-08-08", "2013-05-09", "2019-01-09","2018-11-14", "2017-10-20", "2015-07-09", "2018-01-12", "2017-04-07", "2015-02-25", "2018-11-05", "2012-10-15", "2014-05-09", "2019-12-09","2018-10-12", "2017-10-21", "2015-02-09", "2018-01-11", "2017-05-19", "2015-02-14", "2018-11-06", "2013-10-15", "2018-05-09", "2019-04-19", "2018-08-15", "2017-10-22", "2015-04-09", "2018-01-10", "2017-06-21", "2015-02-18", "2018-11-07", "2014-10-15", "2018-11-09", "2019-05-09", "2018-01-05", "2017-10-23", "2015-09-09", "2018-01-08", "2017-07-23", "2015-02-17", "2018-11-08", "2020-10-15", "2015-05-19", "2019-12-29", "2018-11-25", "2017-10-24", "2015-11-09", "2018-01-25", "2017-12-24", "2015-02-13", "2018-11-09", "2021-11-28", "2015-05-09", "2019-04-04"
]

var li = document.createElement("li");
for (var i = 0; i < 100; i++) {
  //  var itemN = document.querySelector(".itemNum").innerHTML;
  var itemN = i + 1;
  ul.innerHTML += "<li>" + itemN + "</li>"
  itName.innerHTML += "<li>" + itemName[i] + "</li>"
  oName.innerHTML += "<li>" + names[i] + "</li>"
  bookTillDate.innerHTML += "<li>" + tillDate[i] + "</li>"
}

document.querySelector(".back-to-top").addEventListener('click', function(){
  topFunction();
})

function topFunction() {
document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}