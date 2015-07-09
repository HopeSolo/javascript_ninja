$("#main").append("Toni Carbone ");


var awesomeThoughts = "I'm Tony and baähm!!";
var funThoughts = awesomeThoughts.replace("baähm", "geil");
var formattedName = "Tony Carbone";
var formattedRole = "Whatever you want";
console.log(awesomeThoughts);
console.log(funThoughts);

$('#main').append(funThoughts);



$('#header').append(HTMLheaderName.replace("%data%", formattedName));
$('#header').append(HTMLheaderRole.replace("%data%", formattedRole));


