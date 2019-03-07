package com.ait.bookstore;

import java.util.List;
import javax.ejb.EJB;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/books")
@Stateless
@LocalBean
public class booksWS {

    @EJB
    private BookDAO booksDao;

    @GET
    @Path("/{id}")
    @Produces({MediaType.APPLICATION_JSON})
    public Book getBook(@PathParam("id") int id) {
        return booksDao.getBook(id);
    }
    
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public Response findALL() {
    	System.out.println("Get all books");
    	List<Book> books = booksDao.getAllBooks();
    	return Response.status(200).entity(books).build();
    }
    @PUT
    @Path("/{id}")
    @Consumes("application/json")
    @Produces({MediaType.APPLICATION_JSON})
    public Response updateBook(Book book) {
    	booksDao.update(book);
    	return Response.status(200).entity(book).build();
    }
    
    @POST
    @Produces({MediaType.APPLICATION_JSON})
    public Response saveWine(Book book) {
        booksDao.save(book);
        return Response.status(201).entity(book).build();
    }
    @DELETE
    @Path("/{id}")
    public Response deleteCar(@PathParam("id") int id) {
    	booksDao.delete(id);
    	return Response.status(204).build();
    }
    
}
