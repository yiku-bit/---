package com.example.BITSheJianDianPing.request.administrator;


import com.example.BITSheJianDianPing.datamodel.Address;
import com.example.BITSheJianDianPing.datamodel.StdResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class AdminWindowsRequest {
    @PostMapping("/api/admin_page/add_window")
    @ResponseBody
    public StdResponse AddWindow(@RequestBody Address address){
        StdResponse response = new StdResponse();
        //TODO
        return response;
    }
    @DeleteMapping("/api/admin_page/delete_window")
    @ResponseBody
    public StdResponse DeleteWindow(@RequestBody Address address){
        StdResponse response = new StdResponse();
        //TODO
        return response;
    }
}
