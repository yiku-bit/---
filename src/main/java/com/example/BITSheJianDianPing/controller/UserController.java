package com.example.BITSheJianDianPing.controller;

import com.alibaba.fastjson.JSONObject;
import com.example.BITSheJianDianPing.bean.StandardAccept;
import com.example.BITSheJianDianPing.bean.UpdatePw;
import com.example.BITSheJianDianPing.bean.User;
import com.example.BITSheJianDianPing.bean.VertifyCode;
import com.example.BITSheJianDianPing.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserDao userDao;

    @RequestMapping("/api/home_page/set_up/change_password")
    public JSONObject changePassword(@RequestBody StandardAccept<UpdatePw> standardAccept){
        int code = 0;
        String message = "success";
        String type = "user.changepw";

        Integer id = standardAccept.getData().getId();
        String password = standardAccept.getData().getPassword();

        int i = userDao.updatePersonalPassword(id, password);
        if(i>0){

        }else {
            code = 1;
            message = "something wrong happened";
        }

        JSONObject jsonObject = new JSONObject();
        jsonObject.put("code", code);
        jsonObject.put("message", message);
        jsonObject.put("type", type);
        jsonObject.put("data", new JSONObject());

        return jsonObject;
    }

    @RequestMapping("/api/home_page/edit_profile")
    public JSONObject updatePersonData(@RequestBody StandardAccept<User> standardAccept){
        int code = 0;
        String message = "success";
        String type = "user.userdata";

        User data = standardAccept.getData();
        //System.out.printf(data.toString());
        //Integer id, String phoNum, String userName, String dislike, String taste, String foodPre
        int i = userDao.updatePersonalData(data.getId(), data.getPhoNum(), data.getUserName(), data.getDislike(), data.getTaste(), data.getFoodPre());
        if(i>0){

        }else {
            code = 1;
            message = "error";
        }

        User newdata = userDao.getUserByMessage(data.getStuID(), data.getPassword());
//        System.out.printf("");
//        System.out.printf(newdata.toString());

        JSONObject jsonObject = new JSONObject();
        jsonObject.put("code", code);
        jsonObject.put("message", message);
        jsonObject.put("type", type);
        jsonObject.put("data", newdata);

        return jsonObject;
    }

}
