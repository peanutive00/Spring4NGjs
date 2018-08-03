package com.Spring4NGjs.model;

import java.util.List;

public class MenuItem {
    
    private String header;
    private String context;
    private List<SubMenuItem> subMenuItems;

    public String getHeader() {
        return header;
    }

    public void setHeader(String header) {
        this.header = header;
    }

    public String getContext() {
        return context;
    }

    public void setContext(String context) {
        this.context = context;
    }

    public List<SubMenuItem> getSubMenuItems() {
        return subMenuItems;
    }

    public void setSubMenuItems(List<SubMenuItem> subMenuItems) {
        this.subMenuItems = subMenuItems;
    }
    
}
