DROP TABLE IF EXISTS `account`;
CREATE TABLE `account` (
  `id` varchar(15) NOT NULL,
  `name` varchar(20) NOT NULL,
  `balance` int DEFAULT '0',
  `grade` varchar(10) DEFAULT NULL,
  `type` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
INSERT INTO `account` VALUES ('10001','gil dong',240000,'NONE','normal'),('10002','홍길동',320000,'special','Gold'),('10003','고길동',200000,'special','Normal'),('10004','하길동',100000,'Normal','special'),('10005','장길동',100000,NULL,'normal'),('10006','차길동',100000,NULL,'normal'),('10007','song',340000,'Silver','special'),('10008','박길동',100000,'Silver','special'),('101001','임종우',3000000,'VIP','special'),('11000','홍두식',550000,'VIP','special'),('110002','hong',100000,'VIP','special'),('11001','임종우',300000,'VIP','special'),('20001','신태영',500000,'VIP','special'),('20002','김어준',100000,'VIP','special'),('20003','원선영',300000,NULL,'normal'),('20004','멀캠',100000,'NONE','normal'),('20005','멀캠',100000,'NONE','normal'),('20006','멀캠2',100000,'VIP','special'),('20007','멀캠4',100000,'NONE','normal'),('20008','hahaha',100000,'NONE','normal'),('20009','hohaha',100000,'NONE','normal'),('2006','멀캠3',100000,'NONE','special'),('30001','홍홍',100000,'NONE','normal'),('30002','송송',100000,'NONE','normal'),('30003','강강',100000,'NONE','normal'),('30004','하하',100000,'NONE','normal'),('30005','호호',100000,'NONE','normal'),('30006','차차차',100000,'NONE','normal'),('30007','히히',100000,'NONE','normal'),('30008','티카티카',0,'Gold','special'),('30009','목요일',100000,'NONE','normal');