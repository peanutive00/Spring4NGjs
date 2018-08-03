package com.Spring4NGjs.dao.impl;

import com.Spring4NGjs.dao.MenuItemDao;
import com.Spring4NGjs.model.MenuItem;
import com.Spring4NGjs.model.SubMenuItem;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Repository;

@Repository("menuItemDao")
public class MenuItemDaoImpl implements MenuItemDao {
    
    private final List<MenuItem> menuItems = new ArrayList<MenuItem>(){{
        add(new MenuItem(){{
            setHeader("Home");
            setContext("home");
            setSubMenuItems(null);
        }});
        add(new MenuItem(){{
            setHeader("About");
            setContext("#");
            setSubMenuItems(new ArrayList<SubMenuItem>(){{
                add(new SubMenuItem(){{
                    setHeader("About author");
                    setContext("about");  
                }});
            }});
        }});
    }};
    
    @Override
    public List<MenuItem> findMenuItem() {
        return menuItems;
    }
    
}
