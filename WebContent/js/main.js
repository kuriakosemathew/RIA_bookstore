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
	//list = data.user;
	console.log(data);
	console.log("response");
	$.each(data, function(index,dat) {
		$('#table_body').append('<tr><td>'+dat.user_id+'</td><td>'+
				dat.origname+'</td><td>'+dat.username+'<td><button type="button" class="btn btn-info btn-sm">Edit</button></td></tr>');
	});
	$('#table_id').DataTable();
}

var renderListBooks = function(data){
	console.log(data);
	$.each(data, function(index,dat) {
		console.log(dat.available)
		if(dat.available===1)
		{	
				$('#booktable_body').append('<tr><td>'+dat.bookid+'</td><td>'+
				dat.title+'</td><td>'+dat.author
				+'</td><td>'+dat.price+'</td>'
				+'<td><span class="badge badge-success w-75 py-1">Available</span></td>'+'<td><button type="button" class="btn btn-info btn-sm">Edit</button></td></tr>');
		}
		else
		{
			$('#booktable_body').append('<tr><td>'+dat.bookid+'</td><td>'+
					dat.title+'</td><td>'+dat.author
					+'</td><td>'+dat.price+'</td>'
					+'<td><span class="badge badge-danger w-100 py-1">Out of Stock</span></td>'+'<td><button type="button" class="btn btn-info btn-sm">Edit</button></td></tr>');
		}
	});
	$('#booktable_id').DataTable();
}


$(document).ready(function(){
		findAll();
		findAllBooks();
	});