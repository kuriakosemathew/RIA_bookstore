var rootUrl ="http://localhost:8080/RIA_bookstore/rest/";

var findAll=function(){
	
    $.ajax({type:'GET',
            url:rootUrl+'users',
            dataType:"json",
            success:renderList});
}
var findAllBooks=function(){
    $.ajax({type:'GET',
            url:rootUrl+'books',
            dataType:"json",
            success:renderListBooks});
}

var renderList = function(data){
	console.log(data)
	$('#user_count').append(data.length);
	$.each(data, function(index,dat) {
		console.log("inside");
		$('#table_body').append('<tr><td>'+dat.user_id+'</td><td>'+
				dat.origname+'</td><td>'+dat.username+'<td><button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#userModal" data-whatever="'+dat.user_id+'">Edit</button></td></tr>');
	});
	$('#table_id').DataTable();
	
}

var renderListBooks = function(data){
	var worth = 0;
	var avail =0;
	$('#book_count').append(data.length);
	$.each(data, function(index,dat) {
		if(dat.available===1)
		{	
				avail++;
				worth += dat.price;
				$('#booktable_body').append('<tr><td>'+dat.bookid+'</td><td>'+
				dat.title+'</td><td>'+dat.author
				+'</td><td>'+dat.price+'</td>'
				+'<td><span class="badge badge-success w-75 py-1">Available</span></td>'+'<td><button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#bookModal" data-whatever="'+dat.bookid+'">Edit</button></td></tr>');
		}
		else
		{
			$('#booktable_body').append('<tr><td>'+dat.bookid+'</td><td>'+
					dat.title+'</td><td>'+dat.author
					+'</td><td>'+dat.price+'</td>'
					+'<td><span class="badge badge-danger w-100 py-1">Out of Stock</span></td>'+'<td><button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-target="#bookModal" data-whatever="'+dat.bookid+'">Edit</button></td></tr>');
		}
	});
	$('#book_avail').append(avail);
	$('#stock_worth').append("Eur "+ worth);
	$('#booktable_id').DataTable();
}

var deleteUser=function() {
	console.log($('#userid input').val());
	$.ajax({
		type: 'DELETE',
		url: rootUrl+'users/' + $('#userid input').val(),
		success: function(user, textStatus, jqXHR){
			alert('User deleted successfully');
			$('#table_body').empty();
			$('#user_count').empty();
			findAll();
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert('deleteUser error');
		}
	});
}
var deleteBook=function() {
	//console.log($('#userid input').val());
	$.ajax({
		type: 'DELETE',
		url: rootUrl+'books/' + $('#mbookid input').val(),
		success: function(user, textStatus, jqXHR){
			alert('Book deleted successfully');
			$('#book_count').empty();
			$('#book_avail').empty();
			$('#stock_worth').empty();
			$('#booktable_body').empty();
			findAllBooks();
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert('deleteBook error');
		}
	});
}
//Helper function to serialize all the form fields into a JSON string
var formToJSON=function() {
	var userid = $('#userid input').val();
	return JSON.stringify({
		"user_id": $('#userid input').val(),
		"origname": $('#originalname input').val(), 
		"username": $('#username input').val(),
		"pwd": $('#password input').val(),
		"image": $('#displayimage input').val(),
		});
}
var formToJSONbook=function() {
	var bookid = $('#bookid input').val();
	return JSON.stringify({
		"bookid": $('#mbookid input').val(),
        "title": $('#mtitle input').val(),
        "author": $('#mauthor input').val(),
        "publisher": $('#mpublisher input').val(),
        "available": $('#mavailable input').val(),
        "price": $('#mprice input').val(),
        "genre": $('#mgenre input').val(),
        "ebook_availability": $('#mebook input').val(),
        "description": $('#mdesc input').val()
		});
}
var updateUser=function() {
	//console.log('updateWine');
	$.ajax({
		type: 'PUT',
		contentType: 'application/json',
		url:rootUrl + 'users/' + $('#userid input').val(),
		dataType: "json",
		data: formToJSON(),
		success: function(user, textStatus, jqXHR){
			alert('User updated successfully');
			$('#table_body').empty();
			$('#user_count').empty();
			findAll();
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert('updateuser error: ' + textStatus);
		}
	});
}
var updateBook=function() {
	//console.log('updateWine');
	$.ajax({
		type: 'PUT',
		contentType: 'application/json',
		url:rootUrl + 'books/' + $('#bookid input').val(),
		dataType: "json",
		data: formToJSONbook(),
		success: function(user, textStatus, jqXHR){
			alert('Book updated successfully');
			$('#booktable_body').empty();
			$('#book_count').empty();
			$('#book_avail').empty();
			$('#stock_worth').empty();
			findAllBooks();
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert('updatebook error: ' + textStatus);
		}
	});
}
var saveUser=function() {
	//console.log('updateWine');
	$.ajax({
		type: 'POST',
		contentType: 'application/json',
		url:rootUrl + 'users/' ,
		dataType: "json",
		data: formToJSON(),
		success: function(user, textStatus, jqXHR){
			alert('User added successfully');
			$('#table_body').empty();
			$('#user_count').empty();
			findAll();
		//	$("#dp").load(location.href + "#dp");
			$('#userdeletebtn').show();
			$('#useraddbtn').show();
			$('#userupdatebtn').show();
			$('#usersavebtn').hide();
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert('updateUser error: ' + textStatus);
		}
	});
}
var saveBook=function() {
	//console.log('updateWine');
	$.ajax({
		type: 'POST',
		contentType: 'application/json',
		url:rootUrl + 'books/' ,
		dataType: "json",
		data: formToJSONbook(),
		success: function(user, textStatus, jqXHR){
			alert('Book added successfully');
			$('#book_count').empty();
			$('#book_avail').empty();
			$('#stock_worth').empty();
			$('#booktable_body').empty();
			findAllBooks();
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert('updateBook error: ' + textStatus);
		}
	});
}
var addUser=function() {
	$('#userdeletebtn').hide();
	$('#useraddbtn').hide();
	$('#userupdatebtn').hide();
	$('#usersavebtn').show();
	modal.find('#displayimage input').val("")
	currentUser = {};
	// Display empty form
	renderDetails(currentUser); 
}
var addBook=function() {
	$('#bookdeletebtn').hide();
	$('#bookaddbtn').hide();
	$('#bookupdatebtn').hide();
	$('#booksavebtn').show();
	currentBook = {};
	// Display empty form
	renderDetailsbook(currentBook); 
}
var renderDetails=function(user){
	$('#userid input').val(user.user_id);    
	$('#originalname input').val(user.origname);
	$('#username input').val(user.username);
	$('#password input').val(user.pwd);
}
var renderDetailsbook=function(result){
		$('#mbookid input').val( result.bookid)
	    $('#mtitle input').val( result.title)
	    $('#mauthor input').val( result.author)
	    $('#mpublisher input').val( result.publisher)
	    $('#mavailable input').val( result.available)
	    $('#mprice input').val( result.price)
	    $('#mgenre input').val( result.genre)
	    $('#mebook input').val( result.ebook_availability)
	    $('#mdesc input').val( result.description)
}

var authenticateUser = function(){
	uname = $('#usernamemodal input').val();
	pwd = $('#passwordmodal input').val();
	$.ajax({
		type: 'GET',
		url: rootUrl+'users/',
		success: loopuser});
}
var validateuser = function(data){
	console.log(data.pwd);
	console.log(pwd);
	if(data.pwd==pwd){
		$('#loginModal').modal('hide');
		$('#mainname').append(data.origname);
		 $('#dp').attr('src', "images/"+data.image);
		 findAll();
			findAllBooks();
	}
	else{
		
		location.reload();
		alert("Access Denied: Try Again!");
	}
}
var loopuser = function(data){
	flaggy=0;
	$.each(data, function(index,dat) {
		if(dat.username==uname){
			validateuser(dat);
			flaggy = 1;
		}
	});
	if(flaggy==0){
	location.reload();
	alert("Access Denied: Try Again!");
	}
}
$(document).ready(function(){
	   
	   $('#loginModal').modal('show');
	   $('#loginbtn').click(function() {
		   authenticateUser();		   
		});
	   $('#logout').click(function() {
		   location.reload();		   
		});
	   
		//findAll();
		//findAllBooks();
		$('#usersavebtn').hide();
		$('#booksavebtn').hide();
		$('#userModal').on('show.bs.modal', function (event) {
			  var button = $(event.relatedTarget) // Button that triggered the modal
			  // Extract info from data-* attributes
			  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
			  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
			  modal = $(this)
			  $.ajax({type:'GET',
		            url:rootUrl+'users/'+button.data('whatever'),
		            dataType:"json", success: function(result){
		            	console.log(result);
		  			    modal.find('#userid input').val( result.user_id)
		  			    modal.find('#originalname input').val( result.origname)
		  			    modal.find('#username input').val( result.username)
		  			    modal.find('#password input').val( result.pwd)
		  			    modal.find('#displayimage input').val( result.image)
				  }});
			})
		$('#bookModal').on('show.bs.modal', function (event) {
			  var button = $(event.relatedTarget) // Button that triggered the modal
			  // Extract info from data-* attributes
			  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
			  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
			  modal = $(this)
			  $.ajax({type:'GET',
		            url:rootUrl+'books/'+button.data('whatever'),
		            dataType:"json", success: function(result){
		  			    modal.find('#mbookid input').val( result.bookid)
		  			    modal.find('#mtitle input').val( result.title)
		  			    modal.find('#mauthor input').val( result.author)
		  			    modal.find('#mpublisher input').val( result.publisher)
		  			    modal.find('#mavailable input').val( result.available)
		  			    modal.find('#mprice input').val( result.price)
		  			    modal.find('#mgenre input').val( result.genre)
		  			    modal.find('#mebook input').val( result.ebook_availability)
		  			    modal.find('#mdesc input').val( result.description)
				  }});
			})
		$('#userdeletebtn').click(function() {
		   deleteUser();		   
		});
		$('#userupdatebtn').click(function() {
			   updateUser();		   
		});
		$('#useraddbtn').click(function() {
			   addUser();

		});
		$('#usersavebtn').click(function() {
			   saveUser();		   
		});
		
		$('#bookdeletebtn').click(function() {
			   deleteBook();		   
			});
			$('#bookupdatebtn').click(function() {
				   updateBook();		   
			});
			$('#bookaddbtn').click(function() {
				   addBook();		   
			});
			$('#booksavebtn').click(function() {
				   saveBook();		   
			});
	   
});









