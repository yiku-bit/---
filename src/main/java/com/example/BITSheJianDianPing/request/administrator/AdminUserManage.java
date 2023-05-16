package com.example.BITSheJianDianPing.request.administrator;

import com.example.BITSheJianDianPing.datamodel.Address;
import com.example.BITSheJianDianPing.datamodel.StdResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class AdminUserManage {
    @ResponseBody
    @GetMapping("/api/admin_page/get_comment")
    public StdResponse GetComment(@RequestBody Address address){
        StdResponse response = new StdResponse();
        return response;
    }

    @ResponseBody
    @DeleteMapping("/api/admin_page/delete_comment")
    public StdResponse DeleteComment(@RequestBody IDHub id){
        StdResponse response = new StdResponse();
        int cid = id.getCommentID();
        return response;
    }

    @ResponseBody
    @PostMapping("/api/admin_page/ban")
    public StdResponse Ban(@RequestBody IDHub id){
        StdResponse response = new StdResponse();
        int uid = id.getUserID();
        return response;
    }

    @ResponseBody
    @PostMapping("/api/admin_page/unblock")
    public StdResponse Unblock(@RequestBody IDHub id){
        StdResponse response = new StdResponse();
        int uid = id.getUserID();
        return response;
    }



}
