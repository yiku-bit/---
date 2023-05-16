package com.example.BITSheJianDianPing.datamodel;

public class DetailsOfDishes {
    private Integer id;
    private String name;
    private Double discount;
    private Double price;

    private Integer flavor;
    private String description;
    private String photo;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getDiscount() {
        return discount;
    }

    public void setDiscount(Double discount) {
        this.discount = discount;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public void printf()
    {
        System.out.println("id:"+id);
        System.out.println("name:"+name);
        System.out.println("discount:"+discount);
        System.out.println("flavor:"+flavor);
        System.out.println("price:"+price);
        System.out.println("description:"+description);
        System.out.println("photo:"+photo);
    }

    public Integer getFlavor() {
        return flavor;
    }

    public void setFlavor(Integer flavor) {
        this.flavor = flavor;
    }
}
