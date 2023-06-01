package com.example.BITSheJianDianPing.request.administrator;

import com.alibaba.fastjson.JSONObject;
import com.example.BITSheJianDianPing.bean.Administrator;
import com.example.BITSheJianDianPing.dao.AdministratorDao;
import com.example.BITSheJianDianPing.dao.DishDao;
import com.example.BITSheJianDianPing.datamodel.Address;
import com.example.BITSheJianDianPing.bean.DishAttribute;
import com.example.BITSheJianDianPing.datamodel.DetailsOfDishes;
import com.example.BITSheJianDianPing.datamodel.StdResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.*;
@Controller
public class AdminLogin {
    @Autowired
    AdministratorDao administratorDao;

    @ResponseBody
    @PostMapping("/api/admin_login")
    public StdResponse AdminLogin(@RequestBody StdResponse body){
        StdResponse response = new StdResponse();
        response.setType("AdminLogin");
        response.setData(null);
        try{
            String name= (String) body.getData().get("userName");
            String pwd = (String) body.getData().get("password");
            Administrator administrator = administratorDao.getAdminByPassword(name, pwd);
            if(administrator == null){
                System.out.println("Wrong password");
                response.setCode(401);
                response.setMessage("wrong password or username");
            }
            else{
                response.setCode(200);
                response.setMessage("ok");
            }
        }
        catch (Exception e){
            e.printStackTrace();
            response.setCode(403);
            response.setMessage("error");
        }
        return response;
    }

    @ResponseBody
    @PostMapping("/api/sign_up_admin")
    public StdResponse SignUpAdmin(@RequestBody Administrator admin){
        StdResponse response = new StdResponse();
        response.setType("SignUpAdmin");
        response.setData(null);
        try{
            String name = admin.getUserName();
            int cnt = administratorDao.getAdminNumByName(name);
            if(cnt>0){
                response.setCode(400);
                response.setMessage("user exists");
            }else{
                administratorDao.insertAdmin(admin.getAdminID(), admin.getPhoNum(), admin.getUserName(), admin.getPassword());
                response.setCode(200);
                response.setMessage("ok");
            }

        }catch (Exception e){
            e.printStackTrace();;
            response.setCode(400);
            response.setMessage("error");
        }
        return response;

    }

}
