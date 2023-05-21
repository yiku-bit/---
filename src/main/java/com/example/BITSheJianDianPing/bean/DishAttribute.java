package com.example.BITSheJianDianPing.bean;

public class DishAttribute {
        /**
         * 食堂编号，1：北食堂，2：清真食堂，3：南食堂，4：东食堂
         */
        private int canteen;
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
        private int flavor;
        /**
         * 楼层，楼层号
         */
        private int floor;

        @Override
        public String toString() {
                return "DishAttribute{" +
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

        /**
         * 菜品ID，每个菜品有唯一ID
         */
        private int id;
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
        private int window;

        /**
         * 新品，是否为新品 (1:是新品，0：不是)
         */
        private Integer news;

        public int getId() {
                return id;
        }

        public void setId(int id) {
                this.id = id;
        }

        public Integer getNews() {
                return news;
        }

        public void setNews(Integer news) {
                this.news = news;
        }

        public int getCanteen() { return canteen; }
        public void setCanteen(int value) { this.canteen = value; }

        public String getDescription() { return description; }
        public void setDescription(String value) { this.description = value; }

        public double getDiscount() { return discount; }
        public void setDiscount(double value) { this.discount = value; }

        public int getFlavor() { return flavor; }
        public void setFlavor(int value) { this.flavor = value; }

        public int getFloor() { return floor; }
        public void setFloor(int value) { this.floor = value; }

        public int getid() { return id; }
        public void setid(int value) { this.id = value; }

        public String getName() { return name; }
        public void setName(String value) { this.name = value; }

        public String getPhoto() { return photo; }
        public void setPhoto(String value) { this.photo = value; }

        public double getPrice() { return price; }
        public void setPrice(double value) { this.price = value; }

        public int getWindow() { return window; }
        public void setWindow(int value) { this.window = value; }

}
