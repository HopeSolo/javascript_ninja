var formattedName = "Tony Carbone";
var formattedRole = "Whatever you want";

$('#header').append(HTMLheaderName.replace("%data%", formattedName));
$('#header').append(HTMLheaderRole.replace("%data%", formattedRole));
