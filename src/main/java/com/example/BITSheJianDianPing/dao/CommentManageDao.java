package com.example.BITSheJianDianPing.dao;

import com.example.BITSheJianDianPing.bean.CommentAttribute;

import java.util.List;

public interface CommentManageDao {

    List<CommentAttribute> getCommentListByAddress(Integer canteen, Integer floor, Integer window);

    List<CommentAttribute> getCommentListByAddressAndName(Integer canteen, Integer floor, Integer window,String dishname);

    List<Integer> getPopularDishid();
    int insertComment(Integer dishid, String dishname, Integer id,String name, String comment,String photo,String datetime,int canteen,int floor,int window,Integer goodnumber,Integer badnumber,Double discount,Double price,String description,Double taste,Double environment,Double serve);
    int DeleteComment(Integer id);

    int UpdateGoodComment(Integer commentid);

    int UpdateBadComment(Integer commentid);
    int banUser(Integer id);
    int unblockUser(Integer id);
}
