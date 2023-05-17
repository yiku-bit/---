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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of User
-- ----------------------------
BEGIN;
INSERT INTO `User` VALUES (1, '1120200000', '18129635316', '武伟', 'exercitation magna eiusmod in', 0, 'm', 'id', 'adipisicing non', 'anim labore laborum occaecat');
INSERT INTO `User` VALUES (2, '1120200001', '18100003267', '李四', '87654321', 0, 'f', '辣食', '甜', '米饭');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
