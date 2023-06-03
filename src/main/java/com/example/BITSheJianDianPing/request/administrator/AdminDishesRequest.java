package com.example.BITSheJianDianPing.request.administrator;

import com.alibaba.fastjson.JSONObject;
import com.example.BITSheJianDianPing.dao.DishDao;
import com.example.BITSheJianDianPing.datamodel.Address;
import com.example.BITSheJianDianPing.bean.DishAttribute;
import com.example.BITSheJianDianPing.datamodel.DetailsOfDishes;
import com.example.BITSheJianDianPing.datamodel.StdResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.*;


class DishType {

        private int canteen;

        private String description;

        private double discount;

        private int flavor;

        private int floor;

        @Override
        public String toString() {
            return "DishAtt{" +
                    "canteen=" + canteen +
                    ", description='" + description + '\'' +
                    ", discount=" + discount +
                    ", flavor=" + flavor +
                    ", floor=" + floor +
                    ", id=" + id +
                    ", name='" + name + '\'' +
                    ", photo='" + photo + '\'' +
                    ", price=" + price +
                    ", window=" + window +
                    ", news=" + news +
                    '}';
        }


        private int id;

        private String name;

        private String photo;

        private double price;

        private int window;


        private Integer news;


        public int getCanteen() {
            return canteen;
        }

        public void setCanteen(int canteen) {
            this.canteen = canteen;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

        public double getDiscount() {
            return discount;
        }

        public void setDiscount(double discount) {
            this.discount = discount;
        }

        public int getFlavor() {
            return flavor;
        }

        public void setFlavor(int flavor) {
            this.flavor = flavor;
        }

        public int getFloor() {
            return floor;
        }

        public void setFloor(int floor) {
            this.floor = floor;
        }

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getPhoto() {
            return photo;
        }

        public void setPhoto(String photo) {
            this.photo = photo;
        }

        public double getPrice() {
            return price;
        }

        public void setNews(Integer news) {
            this.news = news;
        }

        public void setPrice(double price) {
            this.price = price;
        }

        public int getWindow() {
            return window;
        }

        public void setWindow(int window) {
            this.window = window;
        }

        public Integer getNews() {
            return news;
        }
}

@Controller
public class AdminDishesRequest {
    @Autowired
    DishDao dishDao;
    @GetMapping("/api/admin_page/get_dish_list")
    @ResponseBody
    public StdResponse GetDishList( @RequestParam("canteen") int canteen, @RequestParam("floor") int floor, @RequestParam("window") int window){
//        System.out.println();
        List<DishAttribute> dishAttributes = dishDao.getDishListByAddress(canteen,floor,window);
        System.out.println("address:"+canteen+","+floor+","+window);
        System.out.println("got size:"+dishAttributes.size());
        LinkedList<DetailsOfDishes> detailsOfDishes = new LinkedList<DetailsOfDishes>();
        StdResponse response = new StdResponse();
        HashMap<String, Object> data = new HashMap<>();
        response.setCode(200);
        for(DishAttribute d:dishAttributes){
            detailsOfDishes.add(new DetailsOfDishes(
                    (int)d.getId(), d.getName(), d.getDiscount(), d.getPrice(),
                    (int)d.getFlavor(), d.getDescription(), d.getPhoto()
            ));
        }
        data.put("list", detailsOfDishes);
        response.setData(data);
        response.setMessage("success");
        response.setType("GetDishList");
        return response;
    }
    @PostMapping("/api/admin_page/add_dish")
    @ResponseBody
    public StdResponse AddDish(@RequestBody DishAttribute attribute){
        System.out.println("????");
        StdResponse response = new StdResponse();
        response.setType("AddDish");
        HashMap<String,Object>hashMap = new HashMap<>();
        System.out.println("Adding: "+attribute);
        try{
//            System.out.println(attribute);
            int retval = dishDao.AddDish(attribute.getName(), attribute.getDescription(), attribute.getDiscount(),
                    attribute.getPrice(), attribute.getCanteen(), attribute.getFloor(), attribute.getWindow(),attribute.getNews(),
                    attribute.getPhoto());
//            System.out.println("insert dishes retval=:"+retval);
            Integer lastId = dishDao.AskLastIdentity();
            hashMap.put("id", lastId);
            response.setData(hashMap);
            response.setCode(200);
            response.setMessage("success");
        }catch (Exception e){
            e.printStackTrace();
            response.setCode(500);
            response.setMessage("failed");
        }
        return response;
    }

    @DeleteMapping("/api/admin_page/delete_dish")
    @ResponseBody
    public StdResponse DeleteDish(@RequestBody IDHub id){
        StdResponse response = new StdResponse();
        response.setType("DeleteDish");
        int idNum=id.getId();
        try{
            int retval = dishDao.DeleteDish(idNum);
            response.setCode(200);
            response.setMessage("success");
        }catch (Exception e){
            response.setCode(500);
            response.setMessage("failed");
        }

        return response;
    }


}



