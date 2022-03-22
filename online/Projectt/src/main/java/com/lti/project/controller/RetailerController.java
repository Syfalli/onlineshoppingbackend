package com.lti.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.project.beans.Retailer;
import com.lti.project.exceptions.RetailerException;
import com.lti.project.services.RetailerServiceImpl;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/retailer")
public class RetailerController {
	
	
	@Autowired
	RetailerServiceImpl retailerService ;
	
	@GetMapping("/retailerlist")
	public List<Retailer> adminList() throws RetailerException
	{
		return retailerService.retailerList();
	}

	
	@GetMapping("/retailerlist/{id}") // Get record by Id
	public Retailer findRetailerById(@PathVariable(value="id") int ordId) {
		System.out.println("inside controller of Retailer");
	return retailerService.findRetailerById(ordId);
	}
	
	
	
	
	@PostMapping("/addretailer") // Add new Retailer
	public void addRetailer(@RequestBody Retailer retailer ) //Add new record
	 { 
		retailerService.addNewRetailer(retailer);
	 }
	
	
	
	@DeleteMapping(value = "/deleterecord/{id}")
	 public void deleteRecord(@PathVariable int id)
	 {
		retailerService.deleteRecord(id);
	 }	
	
	
	
	
	
	
	
	
	
}
