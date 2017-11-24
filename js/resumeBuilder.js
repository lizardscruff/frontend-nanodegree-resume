//TODO: Make this shit clean, full of ES6 and add cool stuff like:
// https://d3js.org/
// Make the resume my own. 
// Something about a Google Maps API Key?

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
			],
			//Tags get closed automatically so I had to create a work around.
			"display" : function() {
				for (job in work.jobs) {
					$('#workExperience').append(HTMLworkStart);
					$('.work-entry:last').append(HTMLtitleStart);

					const 	formattedEmployer = work.jobs[job].employer;

							formattedEmployerTitle =
								HTMLworkTitle.replace('%data%', work
									.jobs[job].title);
									
							formattedEmployerLoc =
								HTMLworkLocation.replace('%data%', work
									.jobs[job].location);
								
							formattedEmployerDates =
								HTMLworkDates.replace('%data%', work
									.jobs[job].dates);
							formattedEmployerDescrip =
								HTMLworkDescription.replace('%data%', work
									.jobs[job].description);
									
					$('.work-title:last').append(formattedEmployer)
						.append(formattedEmployerTitle);
					$('.work-entry:last').append(formattedEmployerLoc)
						.append(formattedEmployerDates)
						.append(formattedEmployerDescrip);
				}
			}
		},
		projects = {
			"projects" : [
				{
					"title" : "memoryGame",
					"dates" : "October 2017",
					"description" : "A matching game created with JavaScript"
								  + " and jQuery.",
					"images" : ["images/memory.jpg"]
				}
			],
			"display" : function() {
			// TODO: For when adding multiple projects.
			//Probably need to loop through the projects and each time adding 
			//an ID to the next one like project1, project2, etc.
			//$('.project-entry').first() or find?
			//.replace('#', 'https://lizardscruff.github.io/memoryGame/');
				for (project in projects.projects) {
					$('#projects').append(HTMLprojectStart);
				
					const 	formattedProjectTitle = 
								HTMLprojectTitle.replace('%data%', projects
								.projects[project].title);
							formattedProjectDates = 
								HTMLprojectDates.replace('%data%', projects
								.projects[project].dates);
						 	formattedProjectDescrip = 
						 		HTMLprojectDescription
						 		.replace('%data%', projects
						 		.projects[project].description);
						 	formattedProjectImg = 
						 		HTMLprojectImage.replace('%data%', projects
						 		.projects[project].images);	

					$('.project-entry:last').append(formattedProjectTitle)
						.append(formattedProjectDates)
						.append(formattedProjectDescrip)
						.append(formattedProjectImg);
				}
			}
		},
		bio = {
			"name" : "Zachary BUTTERFIELD",
			"role" : "Freelance Front-End Developer",
			"welcomeMessage" : "Hey there! I'm Zachary Evan Butterfield." 
							 + " Nice to meet you!",
			"biopic" : "images/moogle.jpg",
			"contacts" : {
				"mobile" : "999-999-9999",
				"email" : "zbutterfield@gmail.com",
				"github" : "https://github.com/lizardscruff/",
				"location" : "Satosho, Okayama-ken, Japan"
			},
			"skills" : ["HTML", "JavaScript", "Python", "CSS", "ES6", 
					    "jQuery", "JSON", "AJAX", "Doin' shit propah!"],
			"display" : function() {
				const 	formattedName = 
							HTMLheaderName.replace('%data%', bio.name);
						formattedRole = 
							HTMLheaderRole.replace('%data%', bio.role);
						formattedBioPic = 
							HTMLbioPic.replace('%data%', bio.biopic);
						formattedMsg = 
							HTMLwelcomeMsg
							.replace('%data%', bio.welcomeMessage);
						formattedMobile = 
							HTMLmobile.replace('%data%', bio.contacts.mobile);
						formattedEmail = 
							HTMLemail.replace('%data%', bio.contacts.email);
						formattedGithub = 
							HTMLgithub.replace('%data%', bio.contacts.github);
						formattedLocation = 
							HTMLlocation
							.replace('%data%', bio.contacts.location);						
						
				$('#header').append(formattedName).append(formattedRole)
					.append(HTMLcontactStart);
				$('#contact').append(formattedMobile)
					.append(formattedEmail)
					.append(formattedGithub)
					.append(formattedLocation);
				$('#header').append(formattedBioPic)
					.append(formattedMsg)
					.append(HTMLskillsStart);
				$('#footerContacts').append(formattedMobile)
					.append(formattedEmail).append(formattedGithub)
					.append(formattedLocation);

				if (bio.skills.length > 0) {
					bio.skills.forEach(function(skill) {
						$('#skills')
							.append(HTMLskills.replace('%data%', skill));
					});
				}
				
			}
		},
		education = {
			"schools": [
				{
					"name" : "Georgia Southern University",
					"location" : "Statesboro, GA, USA",
					"degree" : "Bachelor of Fine Arts",
					"degreeDates" : "2004 - 2008",
					"url" : "http://www.georgiasouthern.edu/",
					"majors" : ["Painting"]
				}
			],
			"onlineCourses" : [
				{
					"title" : "Introduction to Programming : "
							+ "Front-End Development",
					"school" : "Udacity",
					"dates" : "May - October 2017",
					"url" : "https://www.udacity.com/"
				}
			],
			"display" : function() {
				for (school in education.schools) {
					$('#education:last').append(HTMLschoolStart);
					const 	formattedSchoolName = 
								HTMLschoolName
								.replace('%data%', education
								.schools[school].name);
							formattedSchoolDegree = 
								HTMLschoolDegree
								.replace('%data%', education
								.schools[school].degree);
							formattedSchoolDates = 
								HTMLschoolDates
								.replace('%data%', education
								.schools[school].degreeDates);
							formattedSchoolLoc = 
								HTMLschoolLocation
								.replace('%data%', education
								.schools[school].location);
							formattedSchoolMajor = 
								HTMLschoolMajor
								.replace('%data%', education
								.schools[school].majors);

					$('.education-entry:last').append(HTMLschoolHead);
					$('.school-header:last').append(formattedSchoolName)
						.append(formattedSchoolDegree);
					$('.education-entry:last').append(formattedSchoolDates)
						.append(formattedSchoolLoc)
						.append(formattedSchoolMajor);
				}
			},
			"displayOnline" : function() {
				for (course in education.onlineCourses) {
					const 	formattedOnlineTitle =
								HTMLonlineTitle.replace('%data%', 
								education.onlineCourses[course].title);
							formattedOnlineSchool =
								HTMLonlineSchool.replace('%data%',
								education.onlineCourses[course].school);
							formattedOnlineDates =
								HTMLonlineDates.replace('%data%',
								education.onlineCourses[course].dates);
							formattedOnlineURL =
								HTMLonlineURL.replace('%data%',
								education.onlineCourses[course].url);
					$('#education:last').append(HTMLonlineClasses)
						.append(HTMLonlineStart);
					$('.online-entry:last')
						.append(formattedOnlineTitle);
					$('.onlineTitle:last').append(formattedOnlineSchool);
					$('.online-entry:last').append(formattedOnlineDates)
							.append(formattedOnlineURL);
				}
			}
		},
		workedLived = {
			"display" : function() {
				$('#mapDiv').append(googleMap);
			}

		}
projects.display();
bio.display();
work.display();
education.display();
education.displayOnline();
workedLived.display();