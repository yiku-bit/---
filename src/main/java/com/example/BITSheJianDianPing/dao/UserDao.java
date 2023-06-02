package com.example.BITSheJianDianPing.dao;

import com.example.BITSheJianDianPing.bean.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;


@Repository
public interface UserDao {
    public User getUserByMessage(@Param("stuID") String stuID, @Param("password") String password);
    public int updatePersonalPassword(Integer id, String password);
    public int insertUser(String stuID, String phoNum, String userName, String password, Integer status, String gender);
    public int updatePersonalData(Integer id, String phoNum, String userName, String dislike, String taste, String foodPre);
    public User getUserByPhoNum(String phoNum);
}
