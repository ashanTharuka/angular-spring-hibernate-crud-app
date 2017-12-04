package lk.ijse.basiccrudapp.service;

import lk.ijse.basiccrudapp.model.Customer;
import lk.ijse.basiccrudapp.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    @Autowired
    CustomerRepository customerRepository;

    public List<Customer> findAll(){
        return customerRepository.findAll();
    }

}
