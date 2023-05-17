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
public class RegisterController {

    @Autowired
    private UserDao userDao;
    @RequestMapping("/api/sign_up")
    public JSONObject signup(@RequestBody StandardAccept<User> standardAccept){

        int code = 0;
        String message = "success";
        String type = "user.signin";

        User temp = standardAccept.getData();

        User userByMessage = userDao.getUserByMessage(temp.getStuID(), temp.getPassword());
        // 没找打表示数据库中没有这个用户资料，可以注册
        if(userByMessage == null){

            int i = userDao.insertUser(temp.getStuID(), temp.getPhoNum(), temp.getUserName(), temp.getPassword(), 0, temp.getGender());
            // i>0表示插入成功
            if(i>0){

            }else {
                code = 2;
                message = "failed";

            }
        }else {
            code = 1;
            message = "the stuID already exists.";
        }

        User userReturn = userDao.getUserByMessage(temp.getStuID(), temp.getPassword());
        JSONObject jsonObject = new JSONObject();

        jsonObject.put("code", code);
        jsonObject.put("message", message);
        jsonObject.put("type", type);
        jsonObject.put("data", userReturn);
        return jsonObject;
    }

}
