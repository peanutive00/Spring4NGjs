package com.Spring4NGjs.service.impl;

import com.Spring4NGjs.dao.EmployeeDao;
import com.Spring4NGjs.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("employeeService")
public class EmployeeServiceImpl implements EmployeeService {
    
    @Autowired
    private EmployeeDao employeeDao;
    
}
