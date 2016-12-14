-- phpMyAdmin SQL Dump
-- version 2.10.3
-- http://www.phpmyadmin.net
-- 
-- 主机: localhost
-- 生成日期: 2016 年 10 月 21 日 05:22
-- 服务器版本: 5.0.51
-- PHP 版本: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

-- 
-- 数据库: `meituan`
-- 

-- --------------------------------------------------------

-- 
-- 表的结构 `shop`
-- 

CREATE TABLE `shop` (
  `id` int(5) unsigned NOT NULL auto_increment,
  `title` varchar(20) NOT NULL,
  `description` varchar(50) NOT NULL,
  `img1` varchar(50) NOT NULL,
  `price` varchar(5) NOT NULL,
  `delprice` varchar(5) NOT NULL,
  `sold` varchar(5) NOT NULL,
  `score` varchar(5) NOT NULL,
  `evaluate` varchar(5) NOT NULL,
  `wrapper` varchar(20) NOT NULL,
  `img2` varchar(50) NOT NULL,
  `img3` varchar(50) NOT NULL,
  `img4` varchar(20) default NULL,
  `img5` varchar(20) default NULL,
  `img6` varchar(20) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

-- 
-- 导出表中的数据 `shop`
-- 

INSERT INTO `shop` VALUES (1, '【2店通用】傣妹火锅', '仅售45元！价值50元的代金券1张，除酒水，饮料外全场通用，可叠加使用，提供免费WiFi。', '1_1', '45', '50', '50625', '5', '7820', '截止到2016.10.25', '1_2', '1_3', '1_4', '1_5', '1_6');
INSERT INTO `shop` VALUES (2, '【13店通用】鹭岛面包坊', '仅售17.9元！价值20元的代金券1张，除蛋糕、外购品外全场通用，可叠加使用，提供免费WiFi。', '2_1', '17.9', '20', '278', '4.98', '6', '截止到2016.10.25', '2_2', '2_3', '2_4', NULL, NULL);
INSERT INTO `shop` VALUES (3, '【建设路口】库·悦食工厂', '仅售88元！价值100元的代金券1张，仅适用于菜品，可叠加使用2张，提供免费WiFi。', '3_1', '88', '100', '473', '4.4', '30', '2016.12.14', '3_2', '3_3', '3_4', '3_5', '3_6');
INSERT INTO `shop` VALUES (4, '【天虹欢乐魔方】一号渔港', '仅售88元！价值100元的代金券1张，仅适用于菜品，可叠加使用3张，提供免费WiFi。', '4_1', '88', '100', '284', '4.3', '13', '2016.12.21', '4_2', '4_3', '4_4', NULL, NULL);
INSERT INTO `shop` VALUES (5, '【2店通用】猪脑壳凉面', '仅售9.8元！价值14元的细土豆粉+奶茶，建议单人使用，提供免费WiFi。', '5_1', '9.8', '14', '3503', '4.2', '867', '2016.11.19', '5_2', '5_3', '5_4', '5_5', NULL);

-- --------------------------------------------------------

-- 
-- 表的结构 `shoporder`
-- 

CREATE TABLE `shoporder` (
  `id` int(10) unsigned NOT NULL auto_increment,
  `title` varchar(50) NOT NULL,
  `price` float NOT NULL,
  `place` int(2) NOT NULL,
  `userid` int(5) NOT NULL,
  `img` varchar(20) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=46 ;

-- 
-- 导出表中的数据 `shoporder`
-- 

INSERT INTO `shoporder` VALUES (44, '【建设路口】库·悦食工厂', 88, 2, 65, '3_1');
INSERT INTO `shoporder` VALUES (43, '【13店通用】鹭岛面包坊', 17.9, 2, 65, '2_1');
INSERT INTO `shoporder` VALUES (42, '【建设路口】库·悦食工厂', 88, 2, 65, '3_1');
INSERT INTO `shoporder` VALUES (41, '【2店通用】傣妹火锅', 90, 2, 65, '1_1');
INSERT INTO `shoporder` VALUES (45, '【13店通用】鹭岛面包坊', 17.9, 2, 65, '2_1');

-- --------------------------------------------------------

-- 
-- 表的结构 `user`
-- 

CREATE TABLE `user` (
  `id` int(5) unsigned NOT NULL auto_increment,
  `name` varchar(20) NOT NULL,
  `password` varchar(40) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=66 ;

-- 
-- 导出表中的数据 `user`
-- 

INSERT INTO `user` VALUES (61, '1', '123456');
INSERT INTO `user` VALUES (62, '3', '123456');
INSERT INTO `user` VALUES (63, '19753', '123456+');
INSERT INTO `user` VALUES (64, '元宝', '123456');
INSERT INTO `user` VALUES (65, 'a', '123456');
