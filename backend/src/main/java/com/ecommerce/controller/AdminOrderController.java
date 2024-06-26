package com.ecommerce.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.exception.OrderException;
import com.ecommerce.model.Order;
import com.ecommerce.response.ApiResponse;
import com.ecommerce.service.OrderService;

@RestController
@RequestMapping("/api/admin/orders")
public class AdminOrderController {

	private OrderService orderService;
	
	public AdminOrderController(OrderService orderService) {
		// TODO Auto-generated constructor stub
		this.orderService=orderService;
	}
	
	@GetMapping("/")
	public ResponseEntity<List<Order>> getAllOrdersHandler(){
		
		List<Order> orders=orderService.getAllOrders();
		
		return new ResponseEntity<>(orders, HttpStatus.ACCEPTED);
	}
	
	@PutMapping("/{orderId}/confirmed")
	public ResponseEntity<Order> confirmedOrderHandler(@PathVariable Long orderId, @RequestHeader("Authorization") String jwt) throws OrderException{
		
		Order order=orderService.confirmedOrder(orderId);
		
		return new ResponseEntity<Order>(order, HttpStatus.ACCEPTED);
	}
	
	@PutMapping("/{orderId}/shipped")
	public ResponseEntity<Order> shippedOrderHandler(@PathVariable Long orderId, @RequestHeader("Authorization") String jwt) throws OrderException{
		
		Order order=orderService.shippedOrder(orderId);
		
		return new ResponseEntity<Order>(order, HttpStatus.ACCEPTED);
	}
	
	@PutMapping("/{orderId}/delivered")
	public ResponseEntity<Order> deliveredOrderHandler(@PathVariable Long orderId, @RequestHeader("Authorization") String jwt) throws OrderException{
		
		Order order=orderService.deliveredOrder(orderId);
		
		return new ResponseEntity<Order>(order, HttpStatus.ACCEPTED);
	}
	
	@PutMapping("/{orderId}/cancelled")
	public ResponseEntity<Order> canceledOrderHandler(@PathVariable Long orderId, @RequestHeader("Authorization") String jwt) throws OrderException{
		
		Order order=orderService.cancelledOrder(orderId);
		
		return new ResponseEntity<Order>(order, HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("/{orderId}/delete")
	public ResponseEntity<ApiResponse> deleteOrderHandler(@PathVariable Long orderId, @RequestHeader("Authorization") String jwt) throws OrderException{
		
		orderService.deleteOrder(orderId);
		
		ApiResponse res=new ApiResponse("Order deleted successfully", true);
		System.out.println("delete method working...");
		
		return new ResponseEntity<>(res, HttpStatus.ACCEPTED);
	}

}























