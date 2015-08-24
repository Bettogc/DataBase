$(document).ready(function(){
	
	// Initialize Parse with the API keys
	Parse.initialize("lxVutBFSANnseIpiadp7CKc5cHssHiqHmm29Vt0o","exR6a0DEn6gRqrrkYhOjoKq020HJg4jRhzCAIL9e");
	
	// Click event for New menu show
	$(".newshow").click(function(){
		$("#new").show(1000);
		$("#view").hide(500);
	})
	// Click event for Visualization menu show
	$(".viewshow").click(function(){
		$("#new").hide(500);

		
		query = new Parse.Query("Students");
		query.limit = 5;
		
		//We submit the query and pass in callback functions.
		query.find({
			success: function(results) {
				for(x in results){
					$(".date").append("<ol><ul>"+results[x].attributes.Name+"</ul></ol>");
				}
			},
			error: function(error) {
				//Error Callback
			}
		});
		
		$("#view").show(1000);
	})
	
	// Click event for to initialize and Save ParseJS
	$(".btn-default").click(function(){
         
         $(".date").text("");
          // Value of Input Text "Name"
		var nameStudent = $("#name").val();
		
		// Extend the native Parse.Object class
		var Students = Parse.Object.extend("Students");

		// Instantiate an object of the Students class
		var students = new Students();

		// Students is now the object that we want to save, so we assign
		students.set("Name",nameStudent);
		alert(nameStudent);
		var nameStudent = $("#name").val("");
		$("#name").focus();
		
		//We call the save method, and pass in success and failure callback functions.
		students.save(null, {       
			success: function(item) {
			//Success Callback 
		},
		error: function(gameScore, error) {
			//Failure Callback
		}

	})
})
	
})

//http://code.tutsplus.com/tutorials/getting-started-with-parse--net-28000