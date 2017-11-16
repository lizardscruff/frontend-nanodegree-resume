/*
NOTES
--------
Purpose:
	- Getting started with AJAX, JSON and JavaScript Objects.
 */

const 	name = 'Zachary Butterfield',
	  	role = 'Front-End Developer',
	  	skills = ['HTML', 'JavaScript', 'Python', 'CSS', 'ES6', 'jQuery', 'JSON', 'AJAX'],
	  	bio = {
				'name' : name,
				'role' : role,
				'contactInfo' : 'zbutterfield@gmail.com',
				'bioPic' : 'images/moogle.jpg',
				'welcomeMessage' : `Hey there! I'm ${name}. Nice to meet you!`,
				'age' : 31,
				'skills' : skills
			},
		work = {},
		education = {},
		$main = $('#main'),
		$header = $('#header'),
		formattedName = HTMLheaderName.replace('%data%', name),
	  	formattedRole = HTMLheaderRole.replace('%data%', role);
	  	//bioPic = HTMLbioPic.replace('%data%', bio.pictureURL);

/* NOTES
-----------------------
// Objects Dot Notation
work.something = "whatever";
// Objects Bracket Notation
work["something"] = "whatever";

// Dot Notation
$("#main").append(work.something);
// Bracket Notation
$("#main").append(work["something"]);
-------------------------------------
*/

// Dot Notation Example
work.jobPos = 'Assistant Language Teacher';
work.employer = 'Altia Central';
work.yearsWorked = 2;
work.city = 'Nagoya';

$main.append(work.jobPos);

// Bracket Notation Example

education["schoolName"] = "Georgia Southern University";
education["yearsAttended"] = "2004 - 2009";
education["schoolCity"] = "Statesboro";

$main.append(education["schoolName"]);


$header.prepend(formattedRole);
$header.prepend(formattedName);
$main.append(bio.name);
$main.append(bio.role);
$main.append(bio.contactInfo);
$main.append(bio.bioPic);
$main.append(bio.welcomeMessage);
$main.append(bio.skills);

/* NOTES
-------
// JSON
// JavaScript Object Notation
// Allows for data of various types(objects, etc.) to be easily encapsulated within other objects.
// "a way to store information in an organized, easy-to-access manner. In a nutshell, it gives us 
// a human-readable collection of data that we can access in a really logical manner."
// https://www.copterlabs.com/json-what-it-is-how-it-works-how-to-use-it/
// Use jsonlint.com to fix and find syntax errors because it's easy to mess up JSONs.

// AJAX
// Asynchronous JavaScript and XML
// Basically, it allows for Web pages/applications to change content dynamically without needing
// to reload the entire page.
*/

// JSON - JavaScript Object Literal Notation example
// REFER TO LESSON 3 21.QUIZ ANSWER TO MAKE THIS BETTER LOOKING.
const education {
	"schools": [
		{
			"name" : "Georgia Southern University",
			"location" : "Statesboro, GA, USA",
			"degree" : "BFA",
			"majors" : "Painting",
			"graduateYear" : "2008"
		},
		{
			"name" : "Udacity",
			"degree" : "Nanodegree",
			"cert" : "Introduction to Programming",
			"focus" : "Front-End Development",
			"graduateYear" : "2017"
		}
	]
}

/*
const awesomeThoughts = `I am ${name} and I am AWESOME!`;
$('#main').append(bio.name);
	  

const funThoughts = awesomeThoughts.replace(['AWESOME'], ['FUN']);
$('#main').append(funThoughts);
$('#main').append(skills);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
*/