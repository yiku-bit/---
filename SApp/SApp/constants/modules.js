const categories = [
    {
      id: "1",
      name: "每日推荐",
      ename:"Daily recommendation",
      //image: require("./icons/daily.png")
    },
    {
      id: "2",
      name: "热门菜品",
      ename:"Popular dishes",
      //image: require("./icons/popular.png")
    },
    {
      id: "3",
      name: "评价栏",
      ename:"Evaluation column",
      //image: require("./icons/eval.png")
    },
    {
      id: "4",
      name: "新品/折扣商品",
      ename:"New/discounted items",
      //image: require("./icons/new.png")
    },
    {
      id: "5",
      name: "流量监控",
      ename:"Flow monitoring",
      //image: require("./icons/flow.png")
    }
  ];

  const profile = {
    username: "Y.",
    avatar: require("../images/headPic.png"),
    taste:"sweet",
    foodPre:"noodles",
    dislike: "spicy"
  };

  export { categories, profile};