package com.example.BITSheJianDianPing.request.administrator;

import com.example.BITSheJianDianPing.bean.User;
import com.example.BITSheJianDianPing.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller

public class use_to_debug {
    @Autowired
    private UserDao userDao;
    @GetMapping("/zc_debug")
    @ResponseBody
    public String DEBUG(){
        User user = userDao.getUserByMessage("114", "514");
        System.out.println("GET");
        System.out.println(user.getStuID());
        System.out.println(user.getPassword());
        return "hello";
    }
}
