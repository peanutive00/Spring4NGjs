package com.Spring4NGjs.dao;

import com.Spring4NGjs.model.MenuItem;
import java.util.List;

public interface MenuItemDao {
    
    List<MenuItem> findMenuItem();
    
}
