package com.example.BITSheJianDianPing.dao;

import com.example.BITSheJianDianPing.bean.Administrator;
import org.springframework.stereotype.Repository;

@Repository
public interface AdministratorDao {
    Administrator getAdminByPassword(String userName, String password);
    int getAdminNumByName(String userName);
    int updatePersonalPassword(Integer id, String password);
    int insertAdmin(String adminID, String phoNum, String userName, String password);

}
