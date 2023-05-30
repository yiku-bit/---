package com.example.BITSheJianDianPing.bean;

public class RecommendDishAttribute {
    private Integer stuID; //学生ID
    private Integer dishID; //菜品ID
    private Double recScore; //推荐分数

    public Integer getStuID() {
        return stuID;
    }

    public void setStuID(Integer stuID) {
        this.stuID = stuID;
    }

    public Integer getDishID() {
        return dishID;
    }

    public void setDishID(Integer dishID) {
        this.dishID = dishID;
    }

    public Double getRecScore() {
        return recScore;
    }

    public void setRecScore(Double recScore) {
        this.recScore = recScore;
    }

}
