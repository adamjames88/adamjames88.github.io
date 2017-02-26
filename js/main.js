function askQuestions () {

	var firstName= prompt ("what is your first name?").trim();
	var lastName= prompt ("what is your second name?").trim();
	var fullName = firstName + ' ' + lastName;

	console.log(fullName);

	if (firstName.toLowerCase().trim() === "general" && lastName.toLowerCase().trim()!="assembly") {
		console.log ("Hello General");

	}

	var age = prompt ("how old are you?");
	age = parseInt (age);

	if (age >= 18) {
	console.log ("user is an adult");

}	else { 
	console.log ("user is a child");
	}
	
}

//When the page has loaded
$(function() {

	$("img").on("click", askQuestions);

	//When the user clicks an h3
	$('h3').on('click', function() {
		
		//toggle the next element
		$(this).next().slideToggle(1000);
	});


});