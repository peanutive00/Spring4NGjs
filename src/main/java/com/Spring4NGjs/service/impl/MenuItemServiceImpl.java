package com.Spring4NGjs.service.impl;

import com.Spring4NGjs.dao.MenuItemDao;
import com.Spring4NGjs.model.MenuItem;
import com.Spring4NGjs.service.MenuItemService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("menuItemService")
public class MenuItemServiceImpl implements MenuItemService {
    
    @Autowired
    private MenuItemDao menuItemDao;

    @Override
    public List<MenuItem> getMenuItem() {
        return menuItemDao.findMenuItem();
    }
    
}
