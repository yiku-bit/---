/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80033
 Source Host           : localhost:3306
 Source Schema         : webapp

 Target Server Type    : MySQL
 Target Server Version : 80033
 File Encoding         : 65001

 Date: 17/05/2023 14:31:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for User
-- ----------------------------
DROP TABLE IF EXISTS `User`;
CREATE TABLE `User` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '微机编码，自动增长，主键',
  `stuID` varchar(255) DEFAULT NULL COMMENT '学号\n',
  `phoNum` varchar(255) DEFAULT NULL COMMENT '手机号',
  `userName` varchar(255) DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `status` int DEFAULT NULL COMMENT '账户状态',
  `gender` varchar(6) DEFAULT NULL COMMENT '性别',
  `dislike` varchar(255) DEFAULT NULL COMMENT '口忌',
  `taste` varchar(255) DEFAULT NULL COMMENT '口味偏好',
  `foodPre` varchar(255) DEFAULT NULL COMMENT '饮食偏好',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Table structure for Administrator
-- ----------------------------
DROP TABLE IF EXISTS `Administrator`;
CREATE TABLE `Administrator` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '微机编码，自动增长，主键',
  `adminID` varchar(255) DEFAULT NULL COMMENT '管理员编号',
  `phoNum` varchar(255) DEFAULT NULL COMMENT '手机号',
  `userName` varchar(255) DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

DROP TABLE IF EXISTS `Address`;
CREATE TABLE `Address`(
    `canteen` int default 0 not null  COMMENT '食堂编号 1:北食堂，2：清真食堂，3：南食堂，4：东食堂',
    `floor` int default 0 not null COMMENT '楼层',
    `windowNum` int default 0 not null COMMENT '窗口号',
    key `canteen_index` (`canteen`),
    key `floor_index` (`floor`),
    key `windowNum_index` (`windowNum`),
    primary key (`canteen`, `floor`, `windowNum`)
)ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- LOAD DATA INFILE '/var/lib/mysql-files/sql_address.csv'
-- INTO TABLE Address
-- FIELDS TERMINATED BY ','
-- LINES TERMINATED BY '\n'
-- IGNORE 1 ROWS;
INSERT IGNORE INTO Address (canteen, floor, windowNum)
SELECT canteen, floor, windowNum
FROM (
  SELECT 1 AS canteen UNION SELECT 2 UNION SELECT 3 UNION SELECT 4
) AS canteens
CROSS JOIN (
  SELECT 1 AS floor UNION SELECT 2 UNION SELECT 3
) AS floors
CROSS JOIN (
  SELECT 1 AS windowNum UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5
  UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9 UNION SELECT 10
) AS windowNums;

DROP TABLE IF EXISTS `Dish`;
CREATE TABLE `Dish`(
    `id` int not null AUTO_INCREMENT COMMENT '自动增长，主键',
    `name` varchar(255) DEFAULT null COMMENT '菜品名',
    `discount` double DEFAULT 1.0 COMMENT '折扣',
    `price` double default 0.0 COMMENT '价格',
    `flavor` int default 0 COMMENT '口味，酸0甜1苦2辣3咸4鲜5',
    `description` varchar(255) default null COMMENT '菜品描述',
    `photo` varchar(255) default null COMMENT '图片url',
    `canteen` int default 0 COMMENT '食堂编号',
    `floor` int default 0 COMMENT '楼层',
    `windowNum` int default 0 COMMENT '窗口号',
    `news` int default 0 COMMENT '是否为新品',

    primary key (`id`),
    foreign key (`canteen`,`floor`,`windowNum`) references Address(`canteen`,`floor`,`windowNum`) on delete cascade on update cascade
)ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

LOAD DATA INFILE '/var/lib/mysql-files/sql_dish.csv'
INTO TABLE Dish
CHARACTER SET "UTF8"
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

select * from Dish limit 10;

Drop table if exists `UserComment`;
CREATE TABLE UserComment(
    `commentid` int not null AUTO_INCREMENT COMMENT '自动增长，主键',
    `name` varchar(255) DEFAULT null COMMENT '用户姓名',
    `id` int default 0 COMMENT '用户ID',
    `dishname` varchar(255) default null COMMENT '菜名',
    `dishid` int default 0 COMMENT '菜品ID',
    `content` varchar(255) default null COMMENT '评价内容',
    `photo` varchar(255) default null COMMENT '图片url',
    `datetime` varchar(255) default null COMMENT '时间',
    `canteen` int default 0 COMMENT '食堂编号',
    `floor` int default 0 COMMENT '楼层',
    `windowNum` int default 0 COMMENT '窗口号',
    `goodnumber` int default 0 COMMENT '赞数量',
    `badnumber` int default 0 COMMENT '踩数量',
    `discount` double DEFAULT 1.0 COMMENT '折扣',
    `price` double default 0.0 COMMENT '价格',
    `description` varchar(255) default null COMMENT '菜品描述',
    `taste` double default 0.0 COMMENT '口味',
    `environment` double default 0.0 COMMENT '环境',
    `serve` double default 0.0 COMMENT '服务',

    primary key (`commentid`),
    foreign key (`canteen`,`floor`,`windowNum`) references Address(`canteen`,`floor`,`windowNum`) on delete cascade on update cascade
)ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- ----------------------------
-- Records of User
-- ----------------------------
BEGIN;
INSERT INTO `User` VALUES (1, '1120200000', '18129635316', '武伟', 'exercitation magna eiusmod in', 0, 'm', 'id', 'adipisicing non', 'anim labore laborum occaecat');
INSERT INTO `User` VALUES (2, '1120200001', '18100003267', '李四', '87654321', 0, 'f', '辣食', '甜', '米饭');
COMMIT;



BEGIN;
INSERT INTO `Address` values (1,2,3);
COMMIT;

BEGIN;
insert into `Dish` (`name`,`canteen`,`floor`,`windowNum`) values ('奥利给',1,2,3);
insert into `Dish` (`name`,`canteen`,`floor`,`windowNum`) values ('奥利奥',1,2,3);
insert into `Dish` (`name`,`canteen`,`floor`,`windowNum`,`discount`) values ('红烧肉',1,2,3,0.8);
insert into `Dish` (`name`,`canteen`,`floor`,`windowNum`,`news`) values ('鸡腿',1,2,3,1);
COMMIT;


SET FOREIGN_KEY_CHECKS = 1;
-- ----------------------------
-- Records of Recommendation
-- ----------------------------
DROP TABLE IF EXISTS `Recommendation`;
CREATE TABLE Recommendation (
  stuID INT NOT NULL,
  dishID INT NOT NULL,
  recScore DOUBLE NOT NULL,
  tmp VARCHAR(255) NuLL,
  PRIMARY KEY (stuID, dishID)
);
-- 把recommendation.csv移至mysql-files文件夹下
LOAD DATA INFILE '/var/lib/mysql-files/recommendation.csv'
INTO TABLE Recommendation
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
alter table Recommendation drop column tmp;