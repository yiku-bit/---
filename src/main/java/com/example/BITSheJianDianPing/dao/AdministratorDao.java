package com.example.BITSheJianDianPing.dao;

import com.example.BITSheJianDianPing.bean.Administrator;
import com.example.BITSheJianDianPing.bean.CommentAttribute;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdministratorDao {
    Administrator getAdminByName(@Param("adminID") String adminID);
    int updatePersonalPassword(Integer id, String password);
    int insertUser(String adminID, String phoNum, String userName, String password, Integer status, String gender);

}
