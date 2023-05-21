package com.example.BITSheJianDianPing.dao;

import com.example.BITSheJianDianPing.bean.CommentAttribute;
import com.example.BITSheJianDianPing.bean.DishAttribute;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DishDao {
    List<DishAttribute> getDishListByAddress(Integer canteen, Integer floor, Integer window);

    List<DishAttribute> getNewDishList();

    List<DishAttribute> getSellDishList();


    DishAttribute getDishByAddressAndName(Integer canteen, Integer floor, Integer window,String name);
    int AddDish(String name, String description, Double discount, Double price, Integer canteen, Integer floor, Integer window, Integer news);
    int AddAddress(Integer canteen, Integer floor, Integer window);
    int DeleteAddress(Integer canteen, Integer floor, Integer window);
    int DeleteDish(Integer id);
    Integer AskLastIdentity();


}
