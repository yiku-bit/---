package com.example.BITSheJianDianPing.request;

import com.example.BITSheJianDianPing.datamodel.RatingOfDishes;
import com.example.BITSheJianDianPing.datamodel.WriteComment;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedList;

class GComment
{
    private Integer commentid;
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

    @GetMapping("/api/home_page/opinion_bar")
    @ResponseBody
    public GetComment opinionBar(@RequestParam("canteen") Integer canteen,@RequestParam("floor") Integer floor,@RequestParam("window") Integer window)
    {
        System.out.println("canteen:"+canteen+" floor:"+floor+" window:"+window);
        GetComment getComment=new GetComment();
        getComment.type="/home_page/opinion_bar";
        getComment.code=1;
        getComment.message="正常";
        getComment.data=new GetComment.Data();
        getComment.data.rating=new RatingOfDishes();
        getComment.data.rating.setTaste(3.5);
        getComment.data.rating.setEnvironment(2.6);
        getComment.data.rating.setServe(3.4);
        getComment.data.comments=new LinkedList<GComment>();
        GComment e= new GComment();
        e.setCommentid(12);
        e.setId(5);
        e.setName("小王");
        e.setDishname("鱼");
        e.setComment("鱼刺太多");
        e.setPhoto("暂无");
        e.setDatetime("2023/5/15");
        e.setGoodnumber(10);
        e.setBadnumber(1);
        e.setDiscount(0.3);
        e.setPrice(10.0);
        e.setDescription("鱼刺多，慎点");
        getComment.data.comments.addFirst(e);
        getComment.data.comments.addFirst(e);
        return getComment;
    }

    @RequestMapping("/api/home_page/write_comment")
    @ResponseBody
    public WriteComment writeComment(@RequestBody WriteComment comment)
    {
        System.out.println("post的json");
        comment.printf();
        return comment;
    }

    @RequestMapping("/api/home_page/opinion_bar/good")
    @ResponseBody
    public boolean goodComment(@RequestBody ComID commentid)
    {
        System.out.println("评论编号"+commentid.getCommentid());
        return true;
    }

    @RequestMapping("/api/home_page/opinion_bar/bad")
    @ResponseBody
    public boolean badComment(@RequestBody ComID commentid)
    {
        System.out.println("评论编号"+commentid.getCommentid());
        return true;
    }

}
