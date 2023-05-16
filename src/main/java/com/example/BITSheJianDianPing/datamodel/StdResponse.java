package com.example.BITSheJianDianPing.datamodel;


import java.util.Map;

/**
 * Request
 *
 * Standard Response
 */
public class StdResponse {
    /**
     * 状态码
     */
    private long code;
    /**
     * 返回数据
     */
    private Map<String, Object> data;
    /**
     * 状态说明
     */
    private String message;
    /**
     * API接口名称
     */
    private String type;

    public long getCode() { return code; }
    public void setCode(long value) { this.code = value; }

    public Map<String, Object> getData() { return data; }
    public void setData(Map<String, Object> value) { this.data = value; }

    public String getMessage() { return message; }
    public void setMessage(String value) { this.message = value; }

    public String getType() { return type; }
    public void setType(String value) { this.type = value; }
}
