//TODO: Make this shit clean, full of ES6 and add cool stuff like:
// https://d3js.org/
// Make the resume my own. 
// Something about a Google Maps API Key?


$('#mapDiv').append(googleMap);
//$('#main').append(internationalizeButton);
// Should be reworked to compensate for middle names and such
function inName(nameString){
  const nameArray = nameString.trim().split(' ');
  const intlName = nameArray[0].charAt(0).toUpperCase()
  				   + nameArray[0].slice(1)
  				   + ' ' + nameArray[1].toUpperCase();
  return intlName;
}
console.log(inName('zachary Butterfield'));


//TODO: Put this in a bio object.
var formattedName = HTMLheaderName.replace('%data%', 'Zachary Evan Butterfield');
var formattedBioPic = HTMLbioPic.replace('%data%', 'images/moogle.jpg')
$('#header').append(formattedName);
$('#header').append(formattedBioPic);



const   work = {
			"jobs" : [
				{
					"employer" : "Altia Central",
					"title" : "Assistant Language Teacher",
					"location" : "Kasaoka, Okayama-ken, Japan",
					"dates" : "January 2015 - Present",
					"description" : "I teach English to school children."
				},
				{
					"employer" : "AtoZ-Education",
					"title" : "Assistant Language Teacher",
					"location" : "Chino, Nagano-ken, Japan",
					"dates" : "Unknown",
					"description" : "I taught English to school children."
				}
			]
		},
		projects = {
			"projects" : [
				{
					"title" : "memoryGame",
					"dates" : "October 2017",
					"description" : "A matching game created with JavaScript and jQuery.",
					"images" : ["images/memory.jpg"]
				}
			]
		},
		bio = {
			"name" : "Zachary Evan Butterfield",
			"role" : "Freelance Front-End Developer",
			"welcomeMessage" : "Hey there! I'm Zachary Evan Butterfield. Nice to meet you!",
			"biopic" : "images/moogle.jpg",
			"contacts" : {
				"mobile" : "999-999-9999",
				"email" : "zbutterfield@gmail.com",
				"github" : "https://github.com/lizardscruff/",
				"location" : "Satosho, Okayama-ken, Japan"
			},
			"skills" : ["HTML", "JavaScript", "Python", "CSS", "ES6", "jQuery", "JSON", "AJAX"]
		},
		education = {
			"schools": [
				{
					"name" : "Georgia Southern University",
					"location" : "Statesboro, GA, USA",
					"degree dates" : "2004 - 2008",
					"url" : "http://www.georgiasouthern.edu/",
					"majors" : ["Painting"]
				}
			],
			"onlineCourses" : [
				{
					"title" : "Introduction to Programming : Front-End Development",
					"school" : "Udacity",
					"dates" : "May - October 2017",
					"url" : "https://www.udacity.com/"
				}
			]
		}


//let's Encapsulate this shiz! Make displays for all object pieces.
projects.display = function() {
	for (project in projects.projects) {
		$('#projects').append(HTMLprojectStart);

		//Finish this
		const formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
		const formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		const formattedProjectDescrip = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
		const formattedProjectImg = HTMLprojectImage.replace('%data%', projects.projects[project].images);

		$('.project-entry:last').append(formattedProjectTitle);
		$('.project-entry:last').append(formattedProjectDates);
		$('.project-entry:last').append(formattedProjectDescrip);
		$('.project-entry:last').append(formattedProjectImg);
	}	
}
projects.display();

function locationizer(work_obj) {
    let locArray = [];
    for(job in work_obj.jobs){
        let newLoc = work_obj.jobs[job].location;
        locArray.push(newLoc);
    }
    return locArray;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));


/*
function locationizer(work_obj) {
    let locArray = [];
    for(let place in work_obj){
        locArray.push(work.jobs[location].place);
    }
    return locArray;
}

// Did locationizer() work? This line will tell you!
console.log(locationizer(work));
*/


function displayWork(){
	//TODO: never use for in loops. Use the ES6 one maybe?
	for(job in work.jobs){
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		//var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);

		$('.work-entry:last').append(formattedEmployerTitle);
		$('.work-entry:last').append(formattedDates);
		//$('.work-entry:last').append(formattedLocation);
		$('.work-entry:last').append(formattedDescription);
	}


	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);

		let formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
		$('#skills').append(formattedSkill);

		formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
		$('#skills').append(formattedSkill);

		formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
		$('#skills').append(formattedSkill);

		formattedSkill = HTMLskills.replace('%data%', bio.skills[3]);
		$('#skills').append(formattedSkill);

		formattedSkill = HTMLskills.replace('%data%', bio.skills[4]);
		$('#skills').append(formattedSkill);

		formattedSkill = HTMLskills.replace('%data%', bio.skills[5]);
		$('#skills').append(formattedSkill);

		formattedSkill = HTMLskills.replace('%data%', bio.skills[6]);
		$('#skills').append(formattedSkill);

		formattedSkill = HTMLskills.replace('%data%', bio.skills[7]);
		$('#skills').append(formattedSkill);
	} else {
		console.log('No Skills!');
	}

}
displayWork();










