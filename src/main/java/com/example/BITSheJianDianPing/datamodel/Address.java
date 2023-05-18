package com.example.BITSheJianDianPing.datamodel;

public class Address {
    private Integer canteen;
    private Integer floor;
    private Integer window;

    public Integer getCanteen() {
        return canteen;
    }

    public void setCanteen(Integer canteen) {
        this.canteen = canteen;
    }

    public Integer getFloor() {
        return floor;
    }

    public void setFloor(Integer floor) {
        this.floor = floor;
    }

    public Integer getWindow() {
        return window;
    }

    public void setWindow(Integer window) {
        this.window = window;
    }

    @Override
    public String toString() {
        return "Address{" +
                "canteen=" + canteen +
                ", floor=" + floor +
                ", window=" + window +
                '}';
    }

    public void printf()
    {
        System.out.println("canteen:"+canteen);
        System.out.println("floor:"+floor);
        System.out.println("window:"+window);
    }
}
