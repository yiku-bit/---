package com.example.BITSheJianDianPing.bean;

public class DishAttribute {

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
