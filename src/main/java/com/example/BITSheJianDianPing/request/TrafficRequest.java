package com.example.BITSheJianDianPing.request;

import java.util.LinkedList;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.example.BITSheJianDianPing.dao.DishDao;

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

class DownloadTrafficRequestData{
    String type;
    Integer code;
    String message;
    class DownloadData{
        private Integer canteen;
        private Integer floor;
        private Integer window;
        class time{
            private String startTime;
            private String endTime;
            public String getStartTime() {
                return startTime;
            }
            public void setStartTime(String startTime) {
                this.startTime = startTime;
            }
            public String getEndTime() {
                return endTime;
            }
            public void setEndTime(String endTime) {
                this.endTime = endTime;
            }
        };
        private time time = new time();
        private Integer humanTraffics;

        

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

        public time getTime() {
            return time;
        }

        public void setTime(String startTime, String endTime) {
            this.time.setStartTime(startTime);
            this.time.setEndTime(endTime);
        }

        public Integer getHumanTraffic() {
            return humanTraffics;
        }

        public void setHumanTraffic(Integer humanTraffics) {
            this.humanTraffics = humanTraffics;
        }
    };

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

    DownloadData data = new DownloadData();

    public DownloadData getData() {
        return data;
    }

    public void setData(DownloadData data) {
        this.data = data;
    }
}

@Controller
public class TrafficRequest {
    @Autowired
    private DishDao dishDao;
    @GetMapping("/api/home_page/traffic_monitoring")
    @ResponseBody
    public TrafficRequestData Traffic(@RequestParam("canteen") Integer canteen, @RequestParam("floor") Integer floor){
        System.out.println("canteen:" + canteen + " floor:" + floor);
        TrafficRequestData trafficRequestData = new TrafficRequestData();
        trafficRequestData.setType("home_page.traffic_monitoring");
        if(dishDao.getAddressCountByFloor(canteen, floor) == 0){
            trafficRequestData.setCode(0);
            trafficRequestData.setMessage("Requested address does not exist.");
            System.out.println("traffic_monitoring : address is null");
            return trafficRequestData;
        }
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

    @GetMapping("/api/home_page/traffic_monitoring/download")
    @ResponseBody
    public DownloadTrafficRequestData DownloadTraffic(@RequestParam("canteen") Integer canteen, @RequestParam("floor") Integer floor, @RequestParam("window") Integer window, @RequestParam("StartTime") String startTime, @RequestParam("EndTime") String endTime){
        System.out.println("canteen:" + canteen + " floor:" + floor + " window:" + window + " StartTime:" + startTime + " EndTime:" + endTime);
        DownloadTrafficRequestData downloadTrafficRequestData = new DownloadTrafficRequestData();
        downloadTrafficRequestData.setType("home_page.traffic_monitoring.download");
        downloadTrafficRequestData.data.setCanteen(canteen);
        downloadTrafficRequestData.data.setFloor(floor);
        downloadTrafficRequestData.data.setWindow(window);
        downloadTrafficRequestData.data.setTime(startTime, endTime);
        if(dishDao.getAddressCountByWindow(canteen, floor, window) == 0){
            downloadTrafficRequestData.setCode(1);
            downloadTrafficRequestData.setMessage("Requested address does not exist.");
            System.out.println("traffic_download : address is null");
            return downloadTrafficRequestData;
        }
        downloadTrafficRequestData.setCode(200);
        downloadTrafficRequestData.setMessage("success");
        downloadTrafficRequestData.data.setHumanTraffic(100 + (int)(Math.random() * 900));
        return downloadTrafficRequestData;
    }

}
