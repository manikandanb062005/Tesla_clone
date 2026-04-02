package com.example.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "orders") // use custom table name because 'order' is reserved in SQL
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Customer details
    private String fullName;
    private String email;
    private String address;
    private String city;
    private String postalCode;
    private String phone;

    // Payment details
    private String payment;

    // Product details
    private Long productId;
    private String productName;
    private String productPrice;

    public Order() {}

    // Getters & Setters

    public Long getId() {
        return id;
    }

    // fullName
    public String getFullName() {
        return fullName;
    }
    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    // email
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    // address
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    // city
    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }

    // postalCode
    public String getPostalCode() {
        return postalCode;
    }
    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    // phone
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }

    // payment
    public String getPayment() {
        return payment;
    }
    public void setPayment(String payment) {
        this.payment = payment;
    }

    // productId
    public Long getProductId() {
        return productId;
    }
    public void setProductId(Long productId) {
        this.productId = productId;
    }

    // productName
    public String getProductName() {
        return productName;
    }
    public void setProductName(String productName) {
        this.productName = productName;
    }

    // productPrice
    public String getProductPrice() {
        return productPrice;
    }
    public void setProductPrice(String productPrice) {
        this.productPrice = productPrice;
    }
}

