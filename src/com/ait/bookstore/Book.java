package com.ait.bookstore;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
@Table(name="books")
public class Book {
    
    @Id //@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="book_id")
    private int bookid;
    @Column(name="title")
    private String title;
    @Column(name="author")
    private String author;
    @Column(name="publisher")
    private String publisher;
    @Column(name="available")
    private int available;
    @Column(name="price")
    private double price;
    @Column(name="genre")
    private String genre;
    @Column(name="ebook_availability")
    private int ebook_availability;
    @Column(name="description")
    private String description;
    
	public int getBookid() {
		return bookid;
	}
	public void setBookid(int bookid) {
		this.bookid = bookid;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getPublisher() {
		return publisher;
	}
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	public int getAvailable() {
		return available;
	}
	public void setAvailable(int available) {
		this.available = available;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public int getEbook_availability() {
		return ebook_availability;
	}
	public void setEbook_availability(int ebook_availability) {
		this.ebook_availability = ebook_availability;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	@Override
	public String toString() {
		return "books [bookid=" + bookid + ", title=" + title + ", author=" + author + ", publisher=" + publisher
				+ ", available=" + available + ", price=" + price + ", genre=" + genre + ", ebook_availability="
				+ ebook_availability + ", description=" + description + "]";
	}
    
}
