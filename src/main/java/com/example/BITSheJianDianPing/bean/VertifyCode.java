package com.example.BITSheJianDianPing.bean;



public class VertifyCode {
    private String code;
    private String phoNum;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getPhoNum() {
        return phoNum;
    }

    public void setPhoNum(String phoNum) {
        this.phoNum = phoNum;
    }

    public VertifyCode() {
    }

    public VertifyCode(String code, String phoNum) {
        this.code = code;
        this.phoNum = phoNum;
    }

    @Override
    public String toString() {
        return "VertifyCode{" +
                "code='" + code + '\'' +
                ", phoNum='" + phoNum + '\'' +
                '}';
    }
}
