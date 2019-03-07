package com.ait.user;

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

@Path("/users")
@Stateless
@LocalBean
public class UsersWS {

    @EJB
    private UserDAO usersDao;

    @GET
    @Path("/{id}")
    @Produces({MediaType.APPLICATION_JSON})
    public User getUser(@PathParam("id") int id) {
        return usersDao.getUser(id);
    }
    
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public Response findALL() {
    	List<User> users = usersDao.getAllUsers();
    	return Response.status(200).entity(users).build();
    }
    @PUT
    @Path("/{id}")
    @Consumes("application/json")
    @Produces({MediaType.APPLICATION_JSON})
    public Response updateUser(User user) {
    	usersDao.update(user);
    	return Response.status(200).entity(user).build();
    }
    
    @POST
    @Produces({MediaType.APPLICATION_JSON})
    public Response saveUser(User user) {
    	usersDao.save(user);
        return Response.status(201).entity(user).build();
    }
    @DELETE
    @Path("/{id}")
    public Response deleteCar(@PathParam("id") int id) {
    	usersDao.delete(id);
    	return Response.status(204).build();
    }
    
}
