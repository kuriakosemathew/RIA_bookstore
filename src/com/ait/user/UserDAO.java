package com.ait.user;

import java.util.List;
import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

@Stateless
@LocalBean
public class UserDAO {

    @PersistenceContext
    private EntityManager em;
    
    public User getUser(int id) {
        return em.find(User.class, id);
    }
    
    public List<User> getAllUsers(){
    	Query query = em.createQuery("SELECT u from User u");
    	return query.getResultList();
    }
    
    public void update(User user) {
    	em.merge(user);
    }
    public void delete(int id) {
    	em.remove(getUser(id));
    }
    public void save(User user) {
    	em.persist(user);
    }
}
