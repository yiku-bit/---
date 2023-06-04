package com.example.BITSheJianDianPing.bean;

public class CommentAttribute {

    private Integer commentid;

    private Integer dishid;
    private String dishname;
    private Integer id;
    private String name;
    private String content;
    private String photo;
    private String datetime;
    private int canteen;
    private int floor;
    private int windowNum;

    private Integer goodnumber;

    private Integer badnumber;

    private Double discount;
    private Double price;
    private String description;

    private Double taste;
    private Double environment;
    private Double serve;

    public Integer getDishid() {
        return dishid;
    }

    public void setDishid(Integer dishid) {
        this.dishid = dishid;
    }

    public Integer getCommentid() {
        return commentid;
    }

    public void setCommentid(Integer commentid) {
        this.commentid = commentid;
    }

    public String getDishname() {
        return dishname;
    }

    public void setDishname(String dishname) {
        this.dishname = dishname;
    }

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

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getDatetime() {
        return datetime;
    }

    public void setDatetime(String datetime) {
        this.datetime = datetime;
    }

    public int getCanteen() {
        return canteen;
    }

    public void setCanteen(int canteen) {
        this.canteen = canteen;
    }

    public int getFloor() {
        return floor;
    }

    public void setFloor(int floor) {
        this.floor = floor;
    }

    public int getWindowNum() {
        return windowNum;
    }

    public void setWindowNum(int windowNum) {
        this.windowNum = windowNum;
    }

    public Integer getGoodnumber() {
        return goodnumber;
    }

    public void setGoodnumber(Integer goodnumber) {
        this.goodnumber = goodnumber;
    }

    public Integer getBadnumber() {
        return badnumber;
    }

    public void setBadnumber(Integer badnumber) {
        this.badnumber = badnumber;
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

    public Double getTaste() {
        return taste;
    }

    public void setTaste(Double taste) {
        this.taste = taste;
    }

    public Double getEnvironment() {
        return environment;
    }

    public void setEnvironment(Double environment) {
        this.environment = environment;
    }

    public Double getServe() {
        return serve;
    }

    public void setServe(Double serve) {
        this.serve = serve;
    }

    public String toString() {
        return "CommentAttribute{" +
                "commentid=" + commentid +
                ", dishid=" + dishid +
                ", dishname='" + dishname + '\'' +
                ", id=" + id +
                ", name='" + name + '\'' +
                ", comment='" + comment + '\'' +
                ", photo='" + photo + '\'' +
                ", datetime='" + datetime + '\'' +
                ", canteen=" + canteen +
                ", floor=" + floor +
                ", windowNum=" + windowNum +
                ", goodnumber=" + goodnumber +
                ", badnumber=" + badnumber +
                ", discount=" + discount +
                ", price=" + price +
                ", description='" + description + '\'' +
                ", taste=" + taste +
                ", environment=" + environment +
                ", serve=" + serve +
                '}';
    }
}
