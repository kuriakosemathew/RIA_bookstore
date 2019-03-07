package com.ait.user;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
@Table(name="users")
public class User {
    
    @Id 
    @Column(name="user_id")
    private int user_id;
    @Column(name="origname")
    private String origname;
    @Column(name="username")
    private String username;
    @Column(name="pwd")
    private String pwd;
    @Column(name="image")
    private String image;
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getOrigname() {
		return origname;
	}
	public void setOrigname(String origname) {
		this.origname = origname;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
//	@Override
//	public String toString() {
//		return "User [user_id=" + user_id + ", origname=" + origname + ", username=" + username + ", pwd=" + pwd
//				+ ", image=" + Arrays.toString(image) + "]";
//	}
	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", origname=" + origname + ", username=" + username + ", pwd=" + pwd
				+ ", image=" + image + "]";
	}
   
    
    
}
