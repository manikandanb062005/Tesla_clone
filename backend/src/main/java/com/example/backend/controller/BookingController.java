package com.example.backend.controller;

import com.example.backend.model.Booking;
import com.example.backend.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/booking")
@CrossOrigin(origins = "http://localhost:5173") // allow React frontend
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    // Create new booking
    @PostMapping("/add")
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingRepository.save(booking);
    }

    // Get all bookings
    @GetMapping("/all")
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    // Get booking by ID
    @GetMapping("/{id}")
    public Booking getBookingById(@PathVariable Long id) {
        return bookingRepository.findById(id).orElse(null);
    }
}


