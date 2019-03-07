package com.ait.bookstore;

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
public class BookDAO {

    @PersistenceContext
    private EntityManager em;
    
    public Book getBook(int id) {
        return em.find(Book.class, id);
    }
    
    public List<Book> getAllBooks(){
    	Query query = em.createQuery("SELECT b from Book b");
    	return query.getResultList();
    }
    public void update(Book book) {
    	em.merge(book);
    }
    public void delete(int id) {
    	em.remove(getBook(id));
    }
    public void save(Book book) {
    	System.out.println("\n\n\n\n\nBUGGY\n\n\n\n");
    	em.persist(book);
    }
}
