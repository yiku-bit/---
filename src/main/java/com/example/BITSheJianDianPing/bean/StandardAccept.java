package com.example.BITSheJianDianPing.bean;

/**
 * 标准接收，封装了User
 */
public class StandardAccept<T> {
    private String type;
    private int code;
    private String message;
    private T data;

    public StandardAccept() {
    }

    public StandardAccept(String type, int code, String message, T data) {
        this.type = type;
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "StandardAccept{" +
                "type='" + type + '\'' +
                ", code=" + code +
                ", message='" + message + '\'' +
                ", data=" + data +
                '}';
    }
}
