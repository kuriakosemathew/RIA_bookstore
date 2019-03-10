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
	$('#user_count').append(data.length);
	$.each(data, function(index,dat) {
		$('#table_body').append('<tr><td>'+dat.user_id+'</td><td>'+
				dat.origname+'</td><td>'+dat.username+'<td><button type="button" class="btn btn-info btn-sm">Edit</button></td></tr>');
	});
	$('#table_id').DataTable();
	
}
var worth = 0;
var avail =0;
var renderListBooks = function(data){
	$('#book_count').append(data.length);
	$.each(data, function(index,dat) {
		if(dat.available===1)
		{	
				avail++;
				worth += dat.price;
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
	$('#book_avail').append(avail);
	$('#stock_worth').append("Eur "+ worth);
	$('#booktable_id').DataTable();
}


$(document).ready(function(){
		findAll();
		findAllBooks();
	});