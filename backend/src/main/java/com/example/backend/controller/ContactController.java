package com.example.backend.controller;

import com.example.backend.model.Contact;
import com.example.backend.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @PostMapping("/add")
    public Contact createContact(@RequestBody Contact contact) {
        return contactRepository.save(contact);
    }

    @GetMapping("/all")
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }
}


