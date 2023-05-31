package com.example.BITSheJianDianPing.request;



import com.example.BITSheJianDianPing.bean.DishAttribute;
import com.example.BITSheJianDianPing.bean.RecommendDishAttribute;
import com.example.BITSheJianDianPing.dao.CommentManageDao;
import com.example.BITSheJianDianPing.dao.DishDao;
import com.google.protobuf.Enum;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Random;
import java.util.Set;
// import org.apache.commons.math3.distribution.EnumeratedDistribution;
// import org.apache.commons.math3.util.Pair;


class AddressAndDetails
{
    private Integer canteen;
    private Integer floor;
    private Integer window;

    private Integer id;
    private String name;
    private Double discount;
    private Double price;
    private Integer flavor;
    private String description;
    private String photo;

    public Integer getCanteen() {
        return canteen;
    }

    public void setCanteen(Integer canteen) {
        this.canteen = canteen;
    }

    public Integer getFloor() {
        return floor;
    }

    public void setFloor(Integer floor) {
        this.floor = floor;
    }

    public Integer getWindow() {
        return window;
    }

    public void setWindow(Integer window) {
        this.window = window;
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

    public Integer getFlavor() {
        return flavor;
    }

    public void setFlavor(Integer flavor) {
        this.flavor = flavor;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }
}

class Data
{
    LinkedList<AddressAndDetails> dishes;

    public LinkedList<AddressAndDetails> getDishes() {
        return dishes;
    }

    public void setDishes(LinkedList<AddressAndDetails> dishes) {
        this.dishes = dishes;
    }
}

class RecommendReturn
{
    String type;
    Integer code;
    String message;
   // public class Data{ AddressAndDetails dishes;}
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

class PopularReturn
{
    String type;
    Integer code;
    String message;

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

class NewandsellReturn
{
    String type;
    Integer code;
    String message;
    static class Data{
        LinkedList<AddressAndDetails> news;
        LinkedList<AddressAndDetails> sell;

        public LinkedList<AddressAndDetails> getNews() {
            return news;
        }

        public void setNews(LinkedList<AddressAndDetails> news) {
            this.news = news;
        }

        public LinkedList<AddressAndDetails> getSell() {
            return sell;
        }

        public void setSell(LinkedList<AddressAndDetails> sell) {
            this.sell = sell;
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

@Controller
public class DishesRequest {

    @Autowired
    private DishDao dishDao;

    @Autowired
    private CommentManageDao commentManageDao;
    @GetMapping("/api/home_page/recommend")
    @ResponseBody
    public RecommendReturn Recommend(@RequestParam("id") Integer id, @RequestParam("date") String date, @RequestParam("number") Integer number)
    {
        System.out.println("id:" + id + " date:" + date + " number:" + number);
        RecommendReturn recommendReturn= new RecommendReturn();
        recommendReturn.type="/home_page/recommend";
        recommendReturn.code=1;
        recommendReturn.message="正常";
        recommendReturn.data=new Data();
        recommendReturn.data.dishes= new LinkedList<AddressAndDetails>();
        
        List<RecommendDishAttribute> recommendDishAttributes = dishDao.getRecommendDishList(id, date);

        if(recommendDishAttributes.size() < number)
        {
            recommendReturn.code=-1; //TODO
            recommendReturn.message="请求菜品数量过多";
            number = recommendDishAttributes.size();
        }

        // for(RecommendDishAttribute recommendDishAttribute:recommendDishAttributes) {
        // //     //获取当前的dishid和recScore
        //     Integer dishId = recommendDishAttribute.getDishID();
        //     double recScore = recommendDishAttribute.getRecScore();

        // }
        // 根据recScore，加权随机选取number个dishId
        double sum = 0;
        for(RecommendDishAttribute recommendDishAttribute:recommendDishAttributes) {
            sum += recommendDishAttribute.getRecScore();
        }
        double[] weight = new double[recommendDishAttributes.size()];
        for(int i = 0; i < recommendDishAttributes.size(); i++) {
            weight[i] = recommendDishAttributes.get(i).getRecScore() / sum;
        }
        Set<Integer> selectedItems = new HashSet<>();
        Random random = new Random();
        while(selectedItems.size() < number) {
            double randomNum = random.nextDouble();
            double sumWeight = 0;
            for(int j = 0; j < recommendDishAttributes.size(); j++) {
                sumWeight += weight[j];
                if(randomNum <= sumWeight) {
                    selectedItems.add(recommendDishAttributes.get(j).getDishID());
                    break;
                }
            }
        }

        System.out.println("随机推荐的" + number + "个dishid是：");
        for(Integer selectedItem : selectedItems) {
            System.out.println(selectedItem);
                AddressAndDetails e = new AddressAndDetails();
                DishAttribute dishAttribute=dishDao.getDishById(selectedItem);
                e.setCanteen(dishAttribute.getCanteen());
                e.setFloor(dishAttribute.getFloor());
                // e.setWindow(dishAttribute.getWindow());

                e.setId(dishAttribute.getId());
                e.setWindow(dishDao.getWindowById(e.getId()));
                e.setName(dishAttribute.getName());
                e.setDiscount(dishAttribute.getDiscount());
                e.setPrice(dishAttribute.getPrice());
                e.setFlavor(dishAttribute.getFlavor());
                e.setDescription(dishAttribute.getDescription());
                e.setPhoto(dishAttribute.getPhoto());
                recommendReturn.data.dishes.add(e);
        }

        

        return recommendReturn;
    }

    @GetMapping("/api/home_page/popular")
    @ResponseBody
    public PopularReturn Popular(@RequestParam("last_id") Integer last_id, @RequestParam("number") Integer number)
    {
        System.out.println("last_id:"+last_id+" number:"+number);
        PopularReturn popularReturn = new PopularReturn();
        popularReturn.type="/home_page/popular";
        popularReturn.code=1;
        popularReturn.message="正常";
        popularReturn.data=new Data();
        popularReturn.data.dishes=new LinkedList<AddressAndDetails>();
        List<Integer> q=commentManageDao.getPopularDishid();

        // if (last_id==0) {
            for (int i = last_id; i < q.size() && i < last_id + number; i++) {
                System.out.println("qsize" + q.size());
                AddressAndDetails e = new AddressAndDetails();
                DishAttribute dishAttribute=dishDao.getDishById(q.get(i));
                System.out.println(q.get(i));
                e.setCanteen(dishAttribute.getCanteen());
                e.setFloor(dishAttribute.getFloor());
                e.setWindow(dishAttribute.getWindow());

                e.setId(dishAttribute.getId());
                e.setWindow(dishDao.getWindowById(e.getId()));
                e.setName(dishAttribute.getName());
                e.setDiscount(dishAttribute.getDiscount());
                e.setPrice(dishAttribute.getPrice());
                e.setFlavor(dishAttribute.getFlavor());
                e.setDescription(dishAttribute.getDescription());
                e.setPhoto(dishAttribute.getPhoto());
                popularReturn.data.dishes.addLast(e);

            }
        // }
        // Integer cnt=0;
        // if (last_id!=0) {
        //     for (int i=0;i<q.size();i++) {
        //         if (q.get(i)==last_id)
        //         {
        //             for (int j=i+1;j<q.size();j++)
        //             {
        //                 cnt++;
        //                 AddressAndDetails e = new AddressAndDetails();
        //                 DishAttribute dishAttribute=dishDao.getDishById(q.get(i));
        //                 e.setCanteen(dishAttribute.getCanteen());
        //                 e.setFloor(dishAttribute.getFloor());
        //                 e.setWindow(dishAttribute.getWindow());

        //                 e.setId(dishAttribute.getId());
        //                 e.setName(dishAttribute.getName());
        //                 e.setDiscount(dishAttribute.getDiscount());
        //                 e.setPrice(dishAttribute.getPrice());
        //                 e.setFlavor(dishAttribute.getFlavor());
        //                 e.setDescription(dishAttribute.getDescription());
        //                 e.setPhoto(dishAttribute.getPhoto());
        //                 popularReturn.data.dishes.addLast(e);
        //                 if (cnt==number) break;
        //             }
        //             break;
        //         }
        //     }
        // }

        return popularReturn;
    }

    @GetMapping("/api/home_page/new_and_sell")
    @ResponseBody
    public NewandsellReturn NewAndSell()
    {
        NewandsellReturn newandsellReturn =new NewandsellReturn();
        newandsellReturn.type="/home_page/new_and_sell";
        newandsellReturn.code=1;
        newandsellReturn.message="正常";
        newandsellReturn.data=new NewandsellReturn.Data();
        newandsellReturn.data.news=new LinkedList<AddressAndDetails>();
        newandsellReturn.data.sell=new LinkedList<AddressAndDetails>();

        List<DishAttribute> dishAttributeNewList;
        dishAttributeNewList=dishDao.getNewDishList();

        for (int i=0;i<dishAttributeNewList.size();i++)
        {
            AddressAndDetails e = new AddressAndDetails();
            e.setCanteen(dishAttributeNewList.get(i).getCanteen());
            e.setFloor(dishAttributeNewList.get(i).getFloor());
            e.setWindow(dishAttributeNewList.get(i).getWindow());
            e.setId(dishAttributeNewList.get(i).getId());
            e.setWindow(dishDao.getWindowById(e.getId()));
            e.setName(dishAttributeNewList.get(i).getName());
            e.setDiscount(dishAttributeNewList.get(i).getDiscount());
            e.setPrice(dishAttributeNewList.get(i).getPrice());
            e.setFlavor(dishAttributeNewList.get(i).getFlavor());
            e.setDescription(dishAttributeNewList.get(i).getDescription());
            e.setPhoto(dishAttributeNewList.get(i).getPhoto());
            newandsellReturn.data.news.addFirst(e);
        }

        List<DishAttribute> dishAttributeSellList;
        dishAttributeSellList=dishDao.getSellDishList();
        for (int i=0;i<dishAttributeSellList.size();i++)
        {
            AddressAndDetails e = new AddressAndDetails();
            e.setCanteen(dishAttributeSellList.get(i).getCanteen());
            e.setFloor(dishAttributeSellList.get(i).getFloor());
            e.setWindow(dishAttributeSellList.get(i).getWindow());
            e.setId(dishAttributeSellList.get(i).getId());
            e.setWindow(dishDao.getWindowById(e.getId()));
            e.setName(dishAttributeSellList.get(i).getName());
            e.setDiscount(dishAttributeSellList.get(i).getDiscount());
            e.setPrice(dishAttributeSellList.get(i).getPrice());
            e.setFlavor(dishAttributeSellList.get(i).getFlavor());
            e.setDescription(dishAttributeSellList.get(i).getDescription());
            e.setPhoto(dishAttributeSellList.get(i).getPhoto());
            newandsellReturn.data.sell.addFirst(e);
        }

        return newandsellReturn;
    }

}

