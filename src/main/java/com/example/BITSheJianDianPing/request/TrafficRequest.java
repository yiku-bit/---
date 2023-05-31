package com.example.BITSheJianDianPing.request;

import java.util.LinkedList;
import java.util.Random;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

class humanTraffic{
    private Integer window;

    private Integer humanTraffic;

    public Integer getWindow() {
        return window;
    }

    public void setWindow(Integer window) {
        this.window = window;
    }

    public Integer getHumanTraffic() {
        return humanTraffic;
    }

    public void setHumanTraffic(Integer humanTraffic) {
        this.humanTraffic = humanTraffic;
    }
}



class TrafficRequestData{
    String type;
    Integer code;
    String message;

    class Data{
        LinkedList<humanTraffic> humanTraffics;

        public LinkedList<humanTraffic> getHumanTraffics() {
            return humanTraffics;
        }

        public void setHumanTraffics(LinkedList<humanTraffic> humanTraffics) {
            this.humanTraffics = humanTraffics;
        }

    }
    Data data = new Data();

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
public class TrafficRequest {
    @GetMapping("/api/home_page/traffic_monitoring")
    @ResponseBody
    public TrafficRequestData Traffic(@RequestParam("canteen") Integer canteen, @RequestParam("floor") Integer floor){
        System.out.println("canteen:" + canteen + " floor:" + floor);
        TrafficRequestData trafficRequestData = new TrafficRequestData();
        trafficRequestData.setType("home_page.traffic_monitoring");
        trafficRequestData.setCode(200);
        trafficRequestData.setMessage("success");
        LinkedList<humanTraffic>humanTraffics = new LinkedList<humanTraffic>();
        for(int i = 1; i <= 4; i++){
            humanTraffic humanTraffic = new humanTraffic();
            humanTraffic.setWindow(i);
            humanTraffic.setHumanTraffic((int)(Math.random() * 20));
            humanTraffics.add(humanTraffic);
        }
        trafficRequestData.data.setHumanTraffics(humanTraffics);
        return trafficRequestData;

    }

}
