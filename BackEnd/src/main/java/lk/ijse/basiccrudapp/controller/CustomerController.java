package lk.ijse.basiccrudapp.controller;

import lk.ijse.basiccrudapp.model.Customer;
import lk.ijse.basiccrudapp.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/crud-hibernate/v1/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @RequestMapping(value = "/find-all", method = RequestMethod.GET)
    public List<Customer> findAllCustomers(){
        return customerService.findAll();
    }

}
