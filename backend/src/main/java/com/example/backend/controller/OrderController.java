package com.example.backend.controller;

import com.example.backend.model.Order;
import com.example.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = "http://localhost:5173") // allow frontend
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    // Create new order
    @PostMapping("/add")
    public Order createOrder(@RequestBody Order order) {
        return orderRepository.save(order);
    }

    // Get all orders
    @GetMapping("/all")
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    // Get order by ID
    @GetMapping("/{id}")
    public Order getOrderById(@PathVariable Long id) {
        return orderRepository.findById(id).orElse(null);
    }
}

