package com.example.BITSheJianDianPing.dao;

import com.example.BITSheJianDianPing.bean.CommentAttribute;

import java.util.List;

public interface CommentManageDao {
    List<CommentAttribute> getCommentListByAddress(Integer canteen, Integer floor, Integer window);
    int DeleteComment(Integer id);
    int banUser(Integer id);
    int unblockUser(Integer id);
}
