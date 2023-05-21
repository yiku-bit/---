package com.example.BITSheJianDianPing.request.administrator;

import com.example.BITSheJianDianPing.bean.CommentAttribute;
import com.example.BITSheJianDianPing.bean.DishAttribute;
import com.example.BITSheJianDianPing.dao.CommentManageDao;
import com.example.BITSheJianDianPing.datamodel.Address;
import com.example.BITSheJianDianPing.datamodel.Comment;
import com.example.BITSheJianDianPing.datamodel.DetailsOfDishes;
import com.example.BITSheJianDianPing.datamodel.StdResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;

@Controller
public class AdminUserManage {
    @Autowired
    CommentManageDao commentManageDao;
    @ResponseBody
    @GetMapping("/api/admin_page/get_comment")
    public StdResponse GetComment(@RequestBody Address address){
        List<CommentAttribute> commentAttributes = commentManageDao.getCommentListByAddress(address.getCanteen(),address.getFloor(),address.getWindow());
        System.out.println("address:"+address);
        System.out.println("got size:"+commentAttributes.size());
        LinkedList<Comment> comments = new LinkedList<>();
        StdResponse response = new StdResponse();
        HashMap<String, Object> data = new HashMap<>();
        response.setCode(200);
        for(CommentAttribute c:commentAttributes){
            comments.add(new Comment(
                    c.getDishid(),
                    c.getDishname(),
                    c.getId(),
                    c.getName(),
                    c.getComment(),
                    c.getPhoto(),
                    c.getDatetime()
            ));
        }
        data.put("list", comments);
        response.setData(data);
        response.setMessage("success");
        response.setType("GetComment");
        return response;
    }

    @ResponseBody
    @DeleteMapping("/api/admin_page/delete_comment")
    public StdResponse DeleteComment(@RequestBody IDHub id){
        StdResponse response = new StdResponse();
        int cid = id.getCommentID();
        try{
            int u=commentManageDao.DeleteComment(cid);
            if(u==0){
                response.setCode(404);
                response.setMessage("no comment found");
            }
            else{
                response.setCode(200);
                response.setMessage("success");
            }
        }catch (Exception e){
            e.printStackTrace();
            response.setCode(500);
            response.setMessage("failed");
        }
        return response;
    }

    @ResponseBody
    @PostMapping("/api/admin_page/ban")
    public StdResponse Ban(@RequestBody IDHub id){
        StdResponse response = new StdResponse();
        int uid = id.getUserID();
        try{
            commentManageDao.banUser(uid);
            response.setCode(200);
            response.setMessage("success");
        }catch (Exception e){
            e.printStackTrace();
            response.setCode(500);
            response.setMessage("failed");
        }
        return response;
    }

    @ResponseBody
    @PostMapping("/api/admin_page/unblock")
    public StdResponse Unblock(@RequestBody IDHub id){
        StdResponse response = new StdResponse();
        int uid = id.getUserID();
        try{
            commentManageDao.unblockUser(uid);
            response.setCode(200);
            response.setMessage("success");
        }catch (Exception e){
            e.printStackTrace();
            response.setCode(500);
            response.setMessage("failed");
        }
        return response;
    }



}
