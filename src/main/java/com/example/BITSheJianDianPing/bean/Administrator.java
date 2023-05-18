package com.example.BITSheJianDianPing.bean;

public class Administrator {
    private int id;//` int NOT NULL AUTO_INCREMENT COMMENT '微机编码，自动增长，主键',
    private String adminID;//` varchar(255) DEFAULT NULL COMMENT '管理员编号\n',

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAdminID() {
        return adminID;
    }

    public void setAdminID(String adminID) {
        this.adminID = adminID;
    }

    public void setPhoNum(String phoNum) {
        this.phoNum = phoNum;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    private String phoNum;//varchar(255) DEFAULT NULL COMMENT '手机号',
    private  String userName;//varchar(255) DEFAULT NULL COMMENT '用户名',

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    private String password;//varchar(255) DEFAULT NULL COMMENT '密码',
//    PRIMARY KEY (`id`)

    public String getUserName() {
        return userName;
    }

    public String getPhoNum() {
        return phoNum;
    }
}
