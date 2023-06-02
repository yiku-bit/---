package com.example.BITSheJianDianPing.controller;

import com.alibaba.fastjson.JSONObject;
import com.example.BITSheJianDianPing.bean.StandardAccept;
import com.example.BITSheJianDianPing.bean.User;
import com.example.BITSheJianDianPing.bean.VertifyCode;
import com.example.BITSheJianDianPing.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VertifyController {

    @Autowired
    private UserDao userDao;

    @RequestMapping("/captcha")
    public JSONObject getVertify(@RequestBody StandardAccept<VertifyCode> standardAccept){
        int code = 0;
        String message = "Vertify success";
        String type = "user.Vertify";
        boolean flag = true;
        // 这里需要一个验证码的查询验证方案， 暂时不做验证，后期需要再开发，因为这个应该牵扯到给手机发短信和服务器获取短信内容
        // 验证过程，修改flag标志位
        User user = userDao.getUserByPhoNum(standardAccept.getData().getPhoNum());

        JSONObject jsonObject = new JSONObject();
        if(flag){
        }else {
            code = 1;
            message = "Verification code error";
        }

        jsonObject.put("code", code);
        jsonObject.put("message", message);
        jsonObject.put("type", type);
        jsonObject.put("data", user);

        return jsonObject;
    }
}
