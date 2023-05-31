package com.example.BITSheJianDianPing.dao;

import com.example.BITSheJianDianPing.bean.CommentAttribute;
import com.example.BITSheJianDianPing.bean.DishAttribute;
import com.example.BITSheJianDianPing.bean.RecommendDishAttribute;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DishDao {
    List<DishAttribute> getDishListByAddress(Integer canteen, Integer floor, Integer window);

    List<DishAttribute> getNewDishList();

    List<DishAttribute> getSellDishList();

    Integer getWindowById(Integer id);
    
    List<RecommendDishAttribute> getRecommendDishList(Integer stuID, String date);

    DishAttribute getDishById(Integer id);
    DishAttribute getDishByAddressAndName(Integer canteen, Integer floor, Integer window,String name);
    int AddDish(String name, String description, Double discount, Double price, Integer canteen, Integer floor, Integer window, Integer news, String photo);
    int AddAddress(Integer canteen, Integer floor, Integer window);
    int DeleteAddress(Integer canteen, Integer floor, Integer window);
    int DeleteDish(Integer id);
    Integer AskLastIdentity();



}
