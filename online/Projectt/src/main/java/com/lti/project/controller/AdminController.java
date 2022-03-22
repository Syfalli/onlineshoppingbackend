package com.lti.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.lti.project.beans.Admin;
import com.lti.project.exceptions.AdminException;
import com.lti.project.services.AdminServiceImpl;


@CrossOrigin(origins="*")
@RestController
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	AdminServiceImpl adminService ;
	
	@GetMapping("/adminlist") //Get list
	public List<Admin> adminList()
	{
		return adminService.adminList();
	}
	
	@GetMapping("/adminlist/{id}") // Get record by Id
	public Admin findAdminById(@PathVariable(value="id") int aId) throws AdminException {
		System.out.println("inside controller of Admin");
	return adminService.findAdminById(aId);
	}
	
	
	@PostMapping("/addadmin") 
	public void addAdmin(@RequestBody Admin admin ) //Add new record
	 { 
		adminService.addNewAdmin(admin);
	 }
	
	
	

}
