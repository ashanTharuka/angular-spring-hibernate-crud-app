package lk.ijse.basiccrudapp.repository;

import lk.ijse.basiccrudapp.model.Customer;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class CustomerRepository {

    @Autowired
    private SessionFactory sessionFactory;

    private Session currentSession(){
        return sessionFactory.getCurrentSession();
    }

    public List<Customer> findAll(){
        return currentSession().createQuery("FROM Customer").list();
    }

}
