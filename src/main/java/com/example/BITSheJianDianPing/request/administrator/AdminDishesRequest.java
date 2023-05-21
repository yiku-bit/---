package com.example.BITSheJianDianPing.request.administrator;

import com.alibaba.fastjson.JSONObject;
import com.example.BITSheJianDianPing.dao.DishDao;
import com.example.BITSheJianDianPing.datamodel.Address;
import com.example.BITSheJianDianPing.bean.DishAttribute;
import com.example.BITSheJianDianPing.datamodel.DetailsOfDishes;
import com.example.BITSheJianDianPing.datamodel.StdResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@Controller
public class AdminDishesRequest {
    @Autowired
    DishDao dishDao;
    @GetMapping("/api/admin_page/get_dish_list")
    @ResponseBody
    public StdResponse GetDishList(@RequestBody Address address){
        List<DishAttribute> dishAttributes = dishDao.getDishListByAddress(address.getCanteen(),address.getFloor(),address.getWindow());
        System.out.println("address:"+address);
        System.out.println("got size:"+dishAttributes.size());
        LinkedList<DetailsOfDishes> detailsOfDishes = new LinkedList<DetailsOfDishes>();
        StdResponse response = new StdResponse();
        HashMap<String, Object> data = new HashMap<>();
        response.setCode(200);
        for(DishAttribute d:dishAttributes){
            detailsOfDishes.add(new DetailsOfDishes(
                    (int)d.getid(), d.getName(), d.getDiscount(), d.getPrice(),
                    (int)d.getFlavor(), d.getDescription(), d.getPhoto()
            ));
        }
        data.put("list", detailsOfDishes);
        response.setData(data);
        response.setMessage("success");
        response.setType("GetDishList");
        return response;
    }
    @PostMapping("/api/admin_page/add_dish")
    @ResponseBody
    public StdResponse AddDish(@RequestBody DishAttribute attribute){
        StdResponse response = new StdResponse();
        response.setType("AddDish");
        HashMap<String,Object>hashMap = new HashMap<>();
        try{
            System.out.println("Adding: "+attribute);
            int retval = dishDao.AddDish(attribute.getName(), attribute.getDescription(), attribute.getDiscount(),
                    attribute.getPrice(), attribute.getCanteen(), attribute.getFloor(), attribute.getWindow(),attribute.getNews());
//            System.out.println("insert dishes retval=:"+retval);
            Integer lastId = dishDao.AskLastIdentity();
            hashMap.put("id", lastId);
            response.setData(hashMap);
            response.setCode(200);
            response.setMessage("success");
        }catch (Exception e){
//            e.printStackTrace();
            response.setCode(500);
            response.setMessage("failed");
        }
        return response;
    }

    @DeleteMapping("/api/admin_page/delete_dish")
    @ResponseBody
    public StdResponse DeleteDish(@RequestBody IDHub id){
        StdResponse response = new StdResponse();
        response.setType("DeleteDish");
        int idNum=id.getId();
        try{
            int retval = dishDao.DeleteDish(idNum);
            response.setCode(200);
            response.setMessage("success");
        }catch (Exception e){
            response.setCode(500);
            response.setMessage("failed");
        }

        return response;
    }


}



