package com.example.BITSheJianDianPing.request.administrator;


import com.example.BITSheJianDianPing.dao.DishDao;
import com.example.BITSheJianDianPing.datamodel.Address;
import com.example.BITSheJianDianPing.datamodel.StdResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class AdminWindowsRequest {
    @Autowired
    DishDao dishDao;
    @PostMapping("/api/admin_page/add_window")
    @ResponseBody
    public StdResponse AddWindow(@RequestBody Address address){
        StdResponse response = new StdResponse();
        response.setType("AddWindow");
        try{
            System.out.println("address: "+address.getCanteen()+", "+address.getFloor()+", "+address.getWindow());
            int retval = dishDao.AddAddress(address.getCanteen(), address.getFloor(), address.getWindow());
            System.out.println("Addwindow retval="+retval);
            response.setCode(200);
            response.setMessage("success");
        }catch (Exception e){
            e.printStackTrace();
            response.setCode(500);
            response.setMessage("failed");
        }
        return response;
    }
    @DeleteMapping("/api/admin_page/delete_window")
    @ResponseBody
    public StdResponse DeleteWindow(@RequestBody Address address){
        StdResponse response = new StdResponse();
        response.setType("DeleteWindow");
        try{
            dishDao.DeleteAddress(address.getCanteen(), address.getFloor(), address.getWindow());
            response.setCode(200);
            response.setMessage("success");
        }catch (Exception e){
            response.setCode(500);
            response.setMessage("failed");
        }
        return response;
    }
}
