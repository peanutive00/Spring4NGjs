package com.Spring4NGjs.controller;

import com.Spring4NGjs.model.MenuItem;
import com.Spring4NGjs.service.MenuItemService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MenuItemRestController {
    
    @Autowired
    private MenuItemService menuItemService;
    
    @RequestMapping(value = "/menuItems/", method = RequestMethod.GET)
    public ResponseEntity<List<MenuItem>> listMenuItems() {
        List<MenuItem> menuItems = menuItemService.getMenuItem();
        if (menuItems == null || menuItems.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(menuItems, HttpStatus.OK);
    }
    
}
