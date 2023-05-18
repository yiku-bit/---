package com.example.BITSheJianDianPing.controller;

import com.alibaba.fastjson.JSONObject;
import com.example.BITSheJianDianPing.bean.StandardAccept;
import com.example.BITSheJianDianPing.bean.User;
import com.example.BITSheJianDianPing.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @Autowired
    private UserDao userDao;

    @RequestMapping("/login")
    public JSONObject login(@RequestBody StandardAccept<User> standardAccept){
        int code = 0;
        String message = "Login success";
        String type = "user.login";
        User user = userDao.getUserByMessage(standardAccept.getData().getStuID(), standardAccept.getData().getPassword());

        JSONObject jsonObject = new JSONObject();
        if(user != null){
        }else {
            code = 1;
            message = "Login failed, Wrong password";
        }

        jsonObject.put("code", code);
        jsonObject.put("message", message);
        jsonObject.put("type", type);
        jsonObject.put("data", user);

        return jsonObject;
    }
}
