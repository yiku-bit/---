package com.example.BITSheJianDianPing.request;

import com.alibaba.fastjson.JSONObject;
import com.example.BITSheJianDianPing.bean.CommentAttribute;
import com.example.BITSheJianDianPing.bean.DishAttribute;
import com.example.BITSheJianDianPing.dao.CommentManageDao;
import com.example.BITSheJianDianPing.dao.DishDao;
import com.example.BITSheJianDianPing.datamodel.RatingOfDishes;
import com.example.BITSheJianDianPing.datamodel.WriteComment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;
import java.util.List;

class GComment
{
    private Integer commentid;
    private Integer dishid;
    private String dishname;
    private Integer id;
    private String name;
    private String comment;
    private String photo;
    private String datetime;
    private Integer goodnumber;
    private Integer badnumber;
    private Double discount;
    private Double price;
    private String description;

    public Integer getDishid() {
        return dishid;
    }

    public void setDishid(Integer dishid) {
        this.dishid = dishid;
    }

    public Integer getCommentid() {
        return commentid;
    }

    public void setCommentid(Integer commentid) {
        this.commentid = commentid;
    }

    public String getDishname() {
        return dishname;
    }

    public void setDishname(String dishname) {
        this.dishname = dishname;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getDatetime() {
        return datetime;
    }

    public void setDatetime(String datetime) {
        this.datetime = datetime;
    }

    public Integer getGoodnumber() {
        return goodnumber;
    }

    public void setGoodnumber(Integer goodnumber) {
        this.goodnumber = goodnumber;
    }

    public Integer getBadnumber() {
        return badnumber;
    }

    public void setBadnumber(Integer badnumber) {
        this.badnumber = badnumber;
    }

    public Double getDiscount() {
        return discount;
    }

    public void setDiscount(Double discount) {
        this.discount = discount;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

class GetComment
{
    String type;
    Integer code;
    String message;
    static class Data{
        RatingOfDishes rating;
        LinkedList<GComment> comments;

        public RatingOfDishes getRating() {
            return rating;
        }

        public void setRating(RatingOfDishes rating) {
            this.rating = rating;
        }

        public LinkedList<GComment> getComments() {
            return comments;
        }

        public void setComments(LinkedList<GComment> comments) {
            this.comments = comments;
        }
    }
    Data data;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Data getData() {
        return data;
    }

    public void setData(Data data) {
        this.data = data;
    }
}

class ComID
{
    private Integer commentid;

    public Integer getCommentid() {
        return commentid;
    }

    public void setCommentid(Integer commentid) {
        this.commentid = commentid;
    }
}

@Controller
public class CommentRequest {

    @Autowired
    private CommentManageDao commentManageDao;

    @Autowired
    private DishDao dishDao;

    @GetMapping("/api/home_page/opinion_bar")
    @ResponseBody
    public GetComment opinionBar(@RequestParam("canteen") Integer canteen,@RequestParam("floor") Integer floor,@RequestParam("window") Integer window,@RequestParam("dishid") Integer dishid,@RequestParam("dishname") String dishname)
    {
        System.out.println("canteen:"+canteen+" floor:"+floor+" window:"+window);

        GetComment getComment=new GetComment();
        getComment.type="/home_page/opinion_bar";
        getComment.code=1;
        getComment.message="正常";
        getComment.data=new GetComment.Data();
        getComment.data.rating=new RatingOfDishes();
        getComment.data.comments=new LinkedList<GComment>();
        getComment.data.rating.setTaste(0.0);
        getComment.data.rating.setEnvironment(0.0);
        getComment.data.rating.setServe(0.0);

        DishAttribute dish;
        dish=dishDao.getDishById(dishid);
        if (dish==null)
        {
            getComment.code=2;
            getComment.message="商品查询失败,该商品id不存在";
            return getComment;
        }
        if (!dish.getName().contentEquals(dishname))
        {
            getComment.code=2;
            getComment.message="商品id和商品名不一致";
            return getComment;
        }
        if(dishDao.getWindowById(dish.getId())!=window||dish.getFloor()!=floor||dish.getCanteen()!=canteen)
        {
            getComment.code=2;
            getComment.message="商品id和商品地址不匹配";
            return getComment;
        }

        List<CommentAttribute> commentAttributeList;
        // commentAttributeList = commentManageDao.getCommentListByAddressAndName(canteen,floor,window,dishname);
        commentAttributeList = commentManageDao.getCommentListByAddressAndId(canteen,floor,window,dishid);
        Double totTaste=0.0,totEnvironment=0.0,totServe=0.0;
        if (commentAttributeList.size()==0)
        {
            getComment.code=1;
            getComment.message="该商品暂无评价";
            return getComment;
        }
        for (int i=0;i<commentAttributeList.size();i++)
        {
            totTaste=totTaste+commentAttributeList.get(i).getTaste();
            totEnvironment=totEnvironment+commentAttributeList.get(i).getEnvironment();
            totServe=totServe+commentAttributeList.get(i).getServe();
        }

        totTaste=totTaste/commentAttributeList.size();
        totEnvironment=totEnvironment/commentAttributeList.size();
        totServe=totServe/commentAttributeList.size();

        totTaste = (double) Math.round(totTaste * 100) / 100;
        totEnvironment = (double) Math.round(totEnvironment * 100) / 100;
        totServe = (double) Math.round(totServe * 100) / 100;

        getComment.data.rating.setTaste(totTaste);
        getComment.data.rating.setEnvironment(totEnvironment);
        getComment.data.rating.setServe(totServe);

        for (int i=0;i<commentAttributeList.size();i++)
        {
            GComment e= new GComment();
            e.setCommentid(commentAttributeList.get(i).getCommentid());
            e.setDishid(commentAttributeList.get(i).getDishid());
            e.setId(commentAttributeList.get(i).getId());
            e.setName(commentAttributeList.get(i).getName());
            e.setDishname(commentAttributeList.get(i).getDishname());
            e.setComment(commentAttributeList.get(i).getComment());
            e.setComment(commentManageDao.getContent(e.getCommentid()));
            e.setPhoto(commentAttributeList.get(i).getPhoto());
            e.setDatetime(commentAttributeList.get(i).getDatetime());
            e.setGoodnumber(commentAttributeList.get(i).getGoodnumber());
            e.setBadnumber(commentAttributeList.get(i).getBadnumber());
            e.setDiscount(commentAttributeList.get(i).getDiscount());
            e.setPrice(commentAttributeList.get(i).getPrice());
            e.setDescription(commentAttributeList.get(i).getDescription());
            getComment.data.comments.addFirst(e);
        }

        return getComment;
    }

    @RequestMapping("/api/home_page/write_comment")
    @ResponseBody
    public JSONObject writeComment(@RequestBody WriteComment comment)
    {
        System.out.println();
        JSONObject jsonObject = new JSONObject();
        int code = 0;
        String message = "成功";
        String type = "home_page/write_comment";

        DishAttribute dishAttribute ;/*= new DishAttribute();*/
        dishAttribute = dishDao.getDishByAddressAndName(comment.getAddress().getCanteen(),comment.getAddress().getFloor(),comment.getAddress().getWindow(),comment.getComment().getDishname());
        if (dishAttribute==null)
        {
            message = "商品查询失败，该商品地址下没有这个商品";
            jsonObject.put("code", code);
            jsonObject.put("message", message);
            jsonObject.put("type", type);
            jsonObject.put("data", "NULL");
            return jsonObject;
        }
        DishAttribute dish;
        dish=dishDao.getDishById(comment.getComment().getDishid());
        if (dish==null)
        {
            message = "商品查询失败，不存在商品id为"+comment.getComment().getDishid()+"的商品";
            jsonObject.put("code", code);
            jsonObject.put("message", message);
            jsonObject.put("type", type);
            jsonObject.put("data", "NULL");
            return jsonObject;
        }
        if (dish.getCanteen()!=comment.getAddress().getCanteen()||dish.getFloor()!=comment.getAddress().getFloor()||dishDao.getWindowById(dish.getId())!=comment.getAddress().getWindow()||(!dish.getName().contentEquals(comment.getComment().getDishname())))
        {
            message = "商品查询失败，商品id有误，与商品地址、商品名不一致";
            //message = message+dish.getName()+" "+comment.getComment().getDishname();
            // if (dish.getCanteen()!=comment.getAddress().getCanteen()) message=message+"canteen";
            // if (dish.getFloor()!=comment.getAddress().getFloor()) message=message+"floor";
            // if (dishDao.getWindowById(dish.getId())!=comment.getAddress().getWindow()) message=message+"windwo";
            // if (dish.getName()!=comment.getComment().getDishname()) message=message+"name";
            jsonObject.put("code", code);
            jsonObject.put("message", message);
            jsonObject.put("type", type);
            jsonObject.put("data", "NULL");
            return jsonObject;
        }

        if(comment.getComment().getComment()==null)
        {
            comment.getComment().setComment("无");
            message = message+"，但评论为空";
        }
        if(comment.getRating().getTaste() == null)
        {
            comment.getRating().setTaste(5.0);
            message = message+"，但无口味打分、默认五分";
        }
        if(comment.getRating().getEnvironment() == null)
        {
            comment.getRating().setEnvironment(5.0);
            message = message+"，但无环境打分、默认五分";
        }
        if(comment.getRating().getServe() == null)
        {
            comment.getRating().setServe(5.0);
            message = message+"，但无服务打分、默认五分";
        }
        if (comment.getRating().getEnvironment()<0||comment.getRating().getEnvironment()>5||comment.getRating().getServe()<0||comment.getRating().getServe()>5||comment.getRating().getTaste()>5||comment.getRating().getTaste()<0)
        {
            message="评分不在合法范围";
            jsonObject.put("code", code);
            jsonObject.put("message", message);
            jsonObject.put("type", type);
            jsonObject.put("data", "NULL");
            return jsonObject;
        }
        int i= commentManageDao.insertComment(comment.getComment().getDishid(),comment.getComment().getDishname(),comment.getComment().getId(),comment.getComment().getName(),comment.getComment().getComment(),comment.getComment().getPhoto(),comment.getComment().getDatetime(),comment.getAddress().getCanteen(),comment.getAddress().getFloor(),comment.getAddress().getWindow(),0,0,dishAttribute.getDiscount(),dishAttribute.getPrice(),dishAttribute.getDescription(),comment.getRating().getTaste(),comment.getRating().getEnvironment(),comment.getRating().getServe());
        if(i>0){

        }else {
            code = 2;
            message = "评论失败";
        }


        jsonObject.put("code", code);
        jsonObject.put("message", message);
        jsonObject.put("type", type);
        jsonObject.put("data", "NULL");
        return jsonObject;
    }

    @RequestMapping("/api/home_page/opinion_bar/good")
    @ResponseBody
    public JSONObject goodComment(@RequestBody ComID commentid)
    {
        System.out.println("评论编号"+commentid.getCommentid());
        int code = 0;
        String message = "success";
        String type = "home_page/opinion_bar/good";

        int i=commentManageDao.UpdateGoodComment(commentid.getCommentid());
        if(i>0){

        }else {
            code = 2;
            message = "失败，不存在该评论号";
            if (commentid.getCommentid()<0) message = "失败，评论编号不能为负数";
        }
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("code", code);
        jsonObject.put("message", message);
        jsonObject.put("type", type);
        jsonObject.put("data", "NULL");
        return jsonObject;
    }

    @RequestMapping("/api/home_page/opinion_bar/bad")
    @ResponseBody
    public JSONObject badComment(@RequestBody ComID commentid)
    {
        System.out.println("评论编号"+commentid.getCommentid());
        int code = 0;
        String message = "success";
        String type = "home_page/opinion_bar/bad";

        int i=commentManageDao.UpdateBadComment(commentid.getCommentid());
        if(i>0){

        }else {
            code = 2;
            message = "失败，不存在该评论号";
            if (commentid.getCommentid()<0) message = "失败，评论编号不能为负数";
        }

        JSONObject jsonObject = new JSONObject();
        jsonObject.put("code", code);
        jsonObject.put("message", message);
        jsonObject.put("type", type);
        jsonObject.put("data", "NULL");
        return jsonObject;
    }

}
