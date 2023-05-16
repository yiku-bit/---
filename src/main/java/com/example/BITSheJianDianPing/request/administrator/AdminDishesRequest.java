package com.example.BITSheJianDianPing.request.administrator;

import com.example.BITSheJianDianPing.datamodel.Address;
import com.example.BITSheJianDianPing.datamodel.StdResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class AdminDishesRequest {
    @GetMapping("/api/admin_page/get_dish_list")
    @ResponseBody
    public StdResponse GetDishList(@RequestBody Address address){
        StdResponse response = new StdResponse();
        //TODO
        return response;
    }
    @PostMapping("/api/admin_page/add_dish")
    @ResponseBody
    public StdResponse AddDish(@RequestBody DishAttribute attribute){
        StdResponse response = new StdResponse();
        //TODO
        return response;
    }

    @DeleteMapping("/api/admin_page/delete_dish")
    @ResponseBody
    public StdResponse DeleteDish(@RequestBody IDHub id){
        StdResponse response = new StdResponse();
        System.out.println(id.getId());
        return response;
    }


}


class DishAttribute {
    /**
     * 食堂编号，1：北食堂，2：清真食堂，3：南食堂，4：东食堂
     */
    private long canteen;
    /**
     * 菜品描述，主要材料，口味
     */
    private String description;
    /**
     * 折扣，目前的折扣
     */
    private double discount;
    /**
     * 口味，酸：0, 甜：1, 苦：2, 辣：3, 咸：4, 鲜：5
     */
    private long flavor;
    /**
     * 楼层，楼层号
     */
    private Long floor;
    /**
     * 菜品ID，每个菜品有唯一ID
     */
    private long id;
    /**
     * 菜品名，菜品名字
     */
    private String name;
    /**
     * 图片，菜品图片
     */
    private String photo;
    /**
     * 价格，菜品价格
     */
    private double price;
    /**
     * 窗口号，窗口号
     */
    private Long window;

    public long getCanteen() { return canteen; }
    public void setCanteen(long value) { this.canteen = value; }

    public String getDescription() { return description; }
    public void setDescription(String value) { this.description = value; }

    public double getDiscount() { return discount; }
    public void setDiscount(double value) { this.discount = value; }

    public long getFlavor() { return flavor; }
    public void setFlavor(long value) { this.flavor = value; }

    public Long getFloor() { return floor; }
    public void setFloor(Long value) { this.floor = value; }

    public long getid() { return id; }
    public void setid(long value) { this.id = value; }

    public String getName() { return name; }
    public void setName(String value) { this.name = value; }

    public String getPhoto() { return photo; }
    public void setPhoto(String value) { this.photo = value; }

    public double getPrice() { return price; }
    public void setPrice(double value) { this.price = value; }

    public Long getWindow() { return window; }
    public void setWindow(Long value) { this.window = value; }
}

