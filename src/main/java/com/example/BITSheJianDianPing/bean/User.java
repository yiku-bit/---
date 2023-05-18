package com.example.BITSheJianDianPing.bean;

/**
 * 用户实体
 */
public class User {

    private int id;
    private String stuID;
    private String phoNum;
    private String userName;
    private String password;
    private int status;
    private String gender;
    private String dislike;
    private String taste;
    private String foodPre;

    public User() {
    }

    public User(String stuID, String phoNum, String userName, String password, int status, String gender, String dislike, String taste, String foodPre) {
        this.stuID = stuID;
        this.phoNum = phoNum;
        this.userName = userName;
        this.password = password;
        this.status = status;
        this.gender = gender;
        this.dislike = dislike;
        this.taste = taste;
        this.foodPre = foodPre;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStuID() {
        return stuID;
    }

    public void setStuID(String stuID) {
        this.stuID = stuID;
    }

    public String getPhoNum() {
        return phoNum;
    }

    public void setPhoNum(String phoNum) {
        this.phoNum = phoNum;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDislike() {
        return dislike;
    }

    public void setDislike(String dislike) {
        this.dislike = dislike;
    }

    public String getTaste() {
        return taste;
    }

    public void setTaste(String taste) {
        this.taste = taste;
    }

    public String getFoodPre() {
        return foodPre;
    }

    public void setFoodPre(String foodPre) {
        this.foodPre = foodPre;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", stuID='" + stuID + '\'' +
                ", phoNum='" + phoNum + '\'' +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", status=" + status +
                ", gender='" + gender + '\'' +
                ", dislike='" + dislike + '\'' +
                ", taste='" + taste + '\'' +
                ", foodPre='" + foodPre + '\'' +
                '}';
    }
}
