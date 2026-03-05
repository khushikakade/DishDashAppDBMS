USE dishdash_food_app;

SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS redirection;
DROP TABLE IF EXISTS pricecomparison;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS platforms;
DROP TABLE IF EXISTS users;

SET FOREIGN_KEY_CHECKS = 1;

-- --------------------------------------------------
-- USERS
-- --------------------------------------------------

CREATE TABLE users (
  user_id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150)
);

INSERT INTO users VALUES
(1,'Rahul Sharma','rahul@gmail.com'),
(2,'Priya Mehta','priya@gmail.com'),
(3,'Amit Patil','amit@gmail.com'),
(4,'Sneha Kulkarni','sneha@gmail.com'),
(5,'Aditya Deshmukh','aditya@gmail.com'),
(6,'Neha Joshi','neha@gmail.com'),
(7,'Rohan Gupta','rohan@gmail.com'),
(8,'Kavya Iyer','kavya@gmail.com');

-- --------------------------------------------------
-- PLATFORMS
-- --------------------------------------------------

CREATE TABLE platforms (
  platform_id INT PRIMARY KEY,
  platform_name VARCHAR(100)
);

INSERT INTO platforms VALUES
(1,'Swiggy'),
(2,'Zomato'),
(3,'EatSure'),
(4,'Magicpin'),
(5,'Dunzo');

-- --------------------------------------------------
-- PRODUCTS (30 items — all images verified via Pexels CDN)
-- --------------------------------------------------

CREATE TABLE products (
  product_id INT PRIMARY KEY,
  product_name VARCHAR(150),
  category VARCHAR(100),
  image_url VARCHAR(500)
);

INSERT INTO products VALUES
-- Biryani (1-4)
(1, 'Chicken Biryani',       'Biryani',       'https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg?auto=compress&cs=tinysrgb&w=600'),
(2, 'Veg Biryani',           'Biryani',       'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=600'),
(3, 'Mutton Biryani',        'Biryani',       'https://images.pexels.com/photos/7593230/pexels-photo-7593230.jpeg?auto=compress&cs=tinysrgb&w=600'),
(4, 'Egg Biryani',           'Biryani',       'https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=600'),

-- North Indian (5-8)
(5, 'Butter Chicken',        'North Indian',  'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=600'),
(6, 'Paneer Butter Masala',  'North Indian',  'https://images.pexels.com/photos/9609835/pexels-photo-9609835.jpeg?auto=compress&cs=tinysrgb&w=600'),
(7, 'Dal Makhani',           'North Indian',  'https://images.pexels.com/photos/8992923/pexels-photo-8992923.jpeg?auto=compress&cs=tinysrgb&w=600'),
(8, 'Chole Bhature',         'North Indian',  'https://images.pexels.com/photos/15731928/pexels-photo-15731928.jpeg?auto=compress&cs=tinysrgb&w=600'),

-- Pizza (9-12)
(9, 'Margherita Pizza',      'Pizza',         'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600'),
(10,'Farmhouse Pizza',       'Pizza',         'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=600'),
(11,'Pepperoni Pizza',       'Pizza',         'https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=600'),
(12,'BBQ Chicken Pizza',     'Pizza',         'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=600'),

-- Fast Food (13-16)
(13,'Veg Burger',            'Fast Food',     'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600'),
(14,'Chicken Burger',        'Fast Food',     'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=600'),
(15,'French Fries',          'Fast Food',     'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600'),
(16,'Chicken Wrap',          'Fast Food',     'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600'),

-- Chinese (17-20)
(17,'Hakka Noodles',         'Chinese',       'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600'),
(18,'Veg Manchurian',        'Chinese',       'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=600'),
(19,'Chicken Fried Rice',    'Chinese',       'https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg?auto=compress&cs=tinysrgb&w=600'),
(20,'Spring Rolls',          'Chinese',       'https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=600'),

-- South Indian (21-24)
(21,'Masala Dosa',           'South Indian',  'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600'),
(22,'Idli Sambar',           'South Indian',  'https://images.pexels.com/photos/4331489/pexels-photo-4331489.jpeg?auto=compress&cs=tinysrgb&w=600'),
(23,'Medu Vada',             'South Indian',  'https://images.pexels.com/photos/14477877/pexels-photo-14477877.jpeg?auto=compress&cs=tinysrgb&w=600'),
(24,'Uttapam',               'South Indian',  'https://images.pexels.com/photos/12806330/pexels-photo-12806330.jpeg?auto=compress&cs=tinysrgb&w=600'),

-- Desserts (25-28)
(25,'Gulab Jamun',           'Desserts',      'https://images.pexels.com/photos/11806604/pexels-photo-11806604.jpeg?auto=compress&cs=tinysrgb&w=600'),
(26,'Rasgulla',              'Desserts',      'https://images.pexels.com/photos/14477881/pexels-photo-14477881.jpeg?auto=compress&cs=tinysrgb&w=600'),
(27,'Chocolate Brownie',     'Desserts',      'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&cs=tinysrgb&w=600'),
(28,'Ice Cream Sundae',      'Desserts',      'https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg?auto=compress&cs=tinysrgb&w=600'),

-- Starters (29-30)
(29,'Paneer Tikka',          'Starter',       'https://images.pexels.com/photos/12842118/pexels-photo-12842118.jpeg?auto=compress&cs=tinysrgb&w=600'),
(30,'Chicken Tikka',         'Starter',       'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600');

-- --------------------------------------------------
-- PRICE COMPARISON (30 products x 5 platforms = 150 rows)
-- --------------------------------------------------

CREATE TABLE pricecomparison (
  comparison_id INT PRIMARY KEY,
  product_id INT,
  platform_id INT,
  price FLOAT,
  discount FLOAT,
  FOREIGN KEY (product_id) REFERENCES products(product_id),
  FOREIGN KEY (platform_id) REFERENCES platforms(platform_id)
);

INSERT INTO pricecomparison VALUES
(1, 1,1, 260, 20), (2, 1,2, 249, 25), (3, 1,3, 255, 30), (4, 1,4, 245, 15), (5, 1,5, 265, 10),
(6, 2,1, 180, 20), (7, 2,2, 170, 25), (8, 2,3, 175, 30), (9, 2,4, 165, 15), (10, 2,5, 185, 10),
(11, 3,1, 340, 15), (12, 3,2, 329, 20), (13, 3,3, 335, 25), (14, 3,4, 320, 10), (15, 3,5, 345, 5),
(16, 4,1, 200, 15), (17, 4,2, 190, 20), (18, 4,3, 195, 25), (19, 4,4, 185, 10), (20, 4,5, 210, 5),
(21, 5,1, 320, 20), (22, 5,2, 310, 30), (23, 5,3, 315, 15), (24, 5,4, 305, 10), (25, 5,5, 330, 5),
(26, 6,1, 280, 25), (27, 6,2, 270, 20), (28, 6,3, 275, 30), (29, 6,4, 260, 15), (30, 6,5, 290, 10),
(31, 7,1, 220, 15), (32, 7,2, 210, 20), (33, 7,3, 215, 25), (34, 7,4, 200, 10), (35, 7,5, 230, 5),
(36, 8,1, 160, 20), (37, 8,2, 150, 25), (38, 8,3, 155, 15), (39, 8,4, 145, 30), (40, 8,5, 170, 10),
(41, 9,1, 199, 15), (42, 9,2, 189, 20), (43, 9,3, 195, 25), (44, 9,4, 180, 10), (45, 9,5, 205, 5),
(46, 10,1, 349, 20), (47, 10,2, 339, 25), (48, 10,3, 345, 15), (49, 10,4, 329, 30), (50, 10,5, 359, 10),
(51, 11,1, 399, 15), (52, 11,2, 389, 20), (53, 11,3, 395, 10), (54, 11,4, 379, 25), (55, 11,5, 410, 5),
(56, 12,1, 449, 20), (57, 12,2, 439, 25), (58, 12,3, 445, 15), (59, 12,4, 429, 30), (60, 12,5, 459, 10),
(61, 13,1, 140, 10), (62, 13,2, 130, 15), (63, 13,3, 135, 20), (64, 13,4, 125, 10), (65, 13,5, 145, 5),
(66, 14,1, 180, 15), (67, 14,2, 170, 20), (68, 14,3, 175, 10), (69, 14,4, 165, 25), (70, 14,5, 190, 5),
(71, 15,1, 120, 10), (72, 15,2, 110, 15), (73, 15,3, 115, 20), (74, 15,4, 105, 10), (75, 15,5, 125, 5),
(76, 16,1, 160, 15), (77, 16,2, 150, 20), (78, 16,3, 155, 10), (79, 16,4, 145, 25), (80, 16,5, 170, 5),
(81, 17,1, 180, 15), (82, 17,2, 170, 20), (83, 17,3, 175, 25), (84, 17,4, 160, 10), (85, 17,5, 190, 5),
(86, 18,1, 200, 20), (87, 18,2, 190, 25), (88, 18,3, 195, 15), (89, 18,4, 180, 30), (90, 18,5, 210, 10),
(91, 19,1, 220, 15), (92, 19,2, 210, 20), (93, 19,3, 215, 10), (94, 19,4, 200, 25), (95, 19,5, 230, 5),
(96, 20,1, 150, 10), (97, 20,2, 140, 15), (98, 20,3, 145, 20), (99, 20,4, 135, 10), (100, 20,5, 155, 5),
(101, 21,1, 120, 15), (102, 21,2, 110, 20), (103, 21,3, 115, 25), (104, 21,4, 100, 10), (105, 21,5, 130, 5),
(106, 22,1, 100, 10), (107, 22,2, 90, 15), (108, 22,3, 95, 20), (109, 22,4, 85, 10), (110, 22,5, 105, 5),
(111, 23,1, 110, 15), (112, 23,2, 100, 20), (113, 23,3, 105, 10), (114, 23,4, 95, 25), (115, 23,5, 115, 5),
(116, 24,1, 130, 10), (117, 24,2, 120, 15), (118, 24,3, 125, 20), (119, 24,4, 115, 10), (120, 24,5, 140, 5),
(121, 25,1, 80, 15), (122, 25,2, 70, 20), (123, 25,3, 75, 25), (124, 25,4, 65, 10), (125, 25,5, 85, 5),
(126, 26,1, 90, 10), (127, 26,2, 80, 15), (128, 26,3, 85, 20), (129, 26,4, 75, 10), (130, 26,5, 95, 5),
(131, 27,1, 150, 20), (132, 27,2, 140, 25), (133, 27,3, 145, 15), (134, 27,4, 135, 30), (135, 27,5, 160, 10),
(136, 28,1, 180, 15), (137, 28,2, 170, 20), (138, 28,3, 175, 10), (139, 28,4, 160, 25), (140, 28,5, 190, 5),
(141, 29,1, 250, 20), (142, 29,2, 240, 25), (143, 29,3, 245, 15), (144, 29,4, 230, 30), (145, 29,5, 260, 10),
(146, 30,1, 280, 15), (147, 30,2, 270, 20), (148, 30,3, 275, 10), (149, 30,4, 260, 25), (150, 30,5, 290, 5);

-- --------------------------------------------------
-- REDIRECTION (150 rows)
-- --------------------------------------------------

CREATE TABLE redirection (
  redirect_id INT PRIMARY KEY,
  comparison_id INT,
  redirect_url VARCHAR(300),
  FOREIGN KEY (comparison_id) REFERENCES pricecomparison(comparison_id)
);

INSERT INTO redirection VALUES
(1,1,'https://www.swiggy.com/search?query=chicken+biryani'),
(2,2,'https://www.zomato.com/pune/search?q=chicken+biryani'),
(3,3,'https://www.eatsure.com/search/chicken-biryani'),
(4,4,'https://magicpin.in/search/?q=chicken+biryani'),
(5,5,'https://www.dunzo.com/search?q=chicken+biryani'),
(6,6,'https://www.swiggy.com/search?query=veg+biryani'),
(7,7,'https://www.zomato.com/pune/search?q=veg+biryani'),
(8,8,'https://www.eatsure.com/search/veg-biryani'),
(9,9,'https://magicpin.in/search/?q=veg+biryani'),
(10,10,'https://www.dunzo.com/search?q=veg+biryani'),
(11,11,'https://www.swiggy.com/search?query=mutton+biryani'),
(12,12,'https://www.zomato.com/pune/search?q=mutton+biryani'),
(13,13,'https://www.eatsure.com/search/mutton-biryani'),
(14,14,'https://magicpin.in/search/?q=mutton+biryani'),
(15,15,'https://www.dunzo.com/search?q=mutton+biryani'),
(16,16,'https://www.swiggy.com/search?query=egg+biryani'),
(17,17,'https://www.zomato.com/pune/search?q=egg+biryani'),
(18,18,'https://www.eatsure.com/search/egg-biryani'),
(19,19,'https://magicpin.in/search/?q=egg+biryani'),
(20,20,'https://www.dunzo.com/search?q=egg+biryani'),
(21,21,'https://www.swiggy.com/search?query=butter+chicken'),
(22,22,'https://www.zomato.com/pune/search?q=butter+chicken'),
(23,23,'https://www.eatsure.com/search/butter-chicken'),
(24,24,'https://magicpin.in/search/?q=butter+chicken'),
(25,25,'https://www.dunzo.com/search?q=butter+chicken'),
(26,26,'https://www.swiggy.com/search?query=paneer+butter+masala'),
(27,27,'https://www.zomato.com/pune/search?q=paneer+butter+masala'),
(28,28,'https://www.eatsure.com/search/paneer-butter-masala'),
(29,29,'https://magicpin.in/search/?q=paneer+butter+masala'),
(30,30,'https://www.dunzo.com/search?q=paneer+butter+masala'),
(31,31,'https://www.swiggy.com/search?query=dal+makhani'),
(32,32,'https://www.zomato.com/pune/search?q=dal+makhani'),
(33,33,'https://www.eatsure.com/search/dal-makhani'),
(34,34,'https://magicpin.in/search/?q=dal+makhani'),
(35,35,'https://www.dunzo.com/search?q=dal+makhani'),
(36,36,'https://www.swiggy.com/search?query=chole+bhature'),
(37,37,'https://www.zomato.com/pune/search?q=chole+bhature'),
(38,38,'https://www.eatsure.com/search/chole-bhature'),
(39,39,'https://magicpin.in/search/?q=chole+bhature'),
(40,40,'https://www.dunzo.com/search?q=chole+bhature'),
(41,41,'https://www.swiggy.com/search?query=margherita+pizza'),
(42,42,'https://www.zomato.com/pune/search?q=margherita+pizza'),
(43,43,'https://www.eatsure.com/search/margherita-pizza'),
(44,44,'https://magicpin.in/search/?q=margherita+pizza'),
(45,45,'https://www.dunzo.com/search?q=margherita+pizza'),
(46,46,'https://www.swiggy.com/search?query=farmhouse+pizza'),
(47,47,'https://www.zomato.com/pune/search?q=farmhouse+pizza'),
(48,48,'https://www.eatsure.com/search/farmhouse-pizza'),
(49,49,'https://magicpin.in/search/?q=farmhouse+pizza'),
(50,50,'https://www.dunzo.com/search?q=farmhouse+pizza'),
(51,51,'https://www.swiggy.com/search?query=pepperoni+pizza'),
(52,52,'https://www.zomato.com/pune/search?q=pepperoni+pizza'),
(53,53,'https://www.eatsure.com/search/pepperoni-pizza'),
(54,54,'https://magicpin.in/search/?q=pepperoni+pizza'),
(55,55,'https://www.dunzo.com/search?q=pepperoni+pizza'),
(56,56,'https://www.swiggy.com/search?query=bbq+chicken+pizza'),
(57,57,'https://www.zomato.com/pune/search?q=bbq+chicken+pizza'),
(58,58,'https://www.eatsure.com/search/bbq-chicken-pizza'),
(59,59,'https://magicpin.in/search/?q=bbq+chicken+pizza'),
(60,60,'https://www.dunzo.com/search?q=bbq+chicken+pizza'),
(61,61,'https://www.swiggy.com/search?query=veg+burger'),
(62,62,'https://www.zomato.com/pune/search?q=veg+burger'),
(63,63,'https://www.eatsure.com/search/veg-burger'),
(64,64,'https://magicpin.in/search/?q=veg+burger'),
(65,65,'https://www.dunzo.com/search?q=veg+burger'),
(66,66,'https://www.swiggy.com/search?query=chicken+burger'),
(67,67,'https://www.zomato.com/pune/search?q=chicken+burger'),
(68,68,'https://www.eatsure.com/search/chicken-burger'),
(69,69,'https://magicpin.in/search/?q=chicken+burger'),
(70,70,'https://www.dunzo.com/search?q=chicken+burger'),
(71,71,'https://www.swiggy.com/search?query=french+fries'),
(72,72,'https://www.zomato.com/pune/search?q=french+fries'),
(73,73,'https://www.eatsure.com/search/french-fries'),
(74,74,'https://magicpin.in/search/?q=french+fries'),
(75,75,'https://www.dunzo.com/search?q=french+fries'),
(76,76,'https://www.swiggy.com/search?query=chicken+wrap'),
(77,77,'https://www.zomato.com/pune/search?q=chicken+wrap'),
(78,78,'https://www.eatsure.com/search/chicken-wrap'),
(79,79,'https://magicpin.in/search/?q=chicken+wrap'),
(80,80,'https://www.dunzo.com/search?q=chicken+wrap'),
(81,81,'https://www.swiggy.com/search?query=hakka+noodles'),
(82,82,'https://www.zomato.com/pune/search?q=hakka+noodles'),
(83,83,'https://www.eatsure.com/search/hakka-noodles'),
(84,84,'https://magicpin.in/search/?q=hakka+noodles'),
(85,85,'https://www.dunzo.com/search?q=hakka+noodles'),
(86,86,'https://www.swiggy.com/search?query=veg+manchurian'),
(87,87,'https://www.zomato.com/pune/search?q=veg+manchurian'),
(88,88,'https://www.eatsure.com/search/veg-manchurian'),
(89,89,'https://magicpin.in/search/?q=veg+manchurian'),
(90,90,'https://www.dunzo.com/search?q=veg+manchurian'),
(91,91,'https://www.swiggy.com/search?query=chicken+fried+rice'),
(92,92,'https://www.zomato.com/pune/search?q=chicken+fried+rice'),
(93,93,'https://www.eatsure.com/search/chicken-fried-rice'),
(94,94,'https://magicpin.in/search/?q=chicken+fried+rice'),
(95,95,'https://www.dunzo.com/search?q=chicken+fried+rice'),
(96,96,'https://www.swiggy.com/search?query=spring+rolls'),
(97,97,'https://www.zomato.com/pune/search?q=spring+rolls'),
(98,98,'https://www.eatsure.com/search/spring-rolls'),
(99,99,'https://magicpin.in/search/?q=spring+rolls'),
(100,100,'https://www.dunzo.com/search?q=spring+rolls'),
(101,101,'https://www.swiggy.com/search?query=masala+dosa'),
(102,102,'https://www.zomato.com/pune/search?q=masala+dosa'),
(103,103,'https://www.eatsure.com/search/masala-dosa'),
(104,104,'https://magicpin.in/search/?q=masala+dosa'),
(105,105,'https://www.dunzo.com/search?q=masala+dosa'),
(106,106,'https://www.swiggy.com/search?query=idli+sambar'),
(107,107,'https://www.zomato.com/pune/search?q=idli+sambar'),
(108,108,'https://www.eatsure.com/search/idli-sambar'),
(109,109,'https://magicpin.in/search/?q=idli+sambar'),
(110,110,'https://www.dunzo.com/search?q=idli+sambar'),
(111,111,'https://www.swiggy.com/search?query=medu+vada'),
(112,112,'https://www.zomato.com/pune/search?q=medu+vada'),
(113,113,'https://www.eatsure.com/search/medu-vada'),
(114,114,'https://magicpin.in/search/?q=medu+vada'),
(115,115,'https://www.dunzo.com/search?q=medu+vada'),
(116,116,'https://www.swiggy.com/search?query=uttapam'),
(117,117,'https://www.zomato.com/pune/search?q=uttapam'),
(118,118,'https://www.eatsure.com/search/uttapam'),
(119,119,'https://magicpin.in/search/?q=uttapam'),
(120,120,'https://www.dunzo.com/search?q=uttapam'),
(121,121,'https://www.swiggy.com/search?query=gulab+jamun'),
(122,122,'https://www.zomato.com/pune/search?q=gulab+jamun'),
(123,123,'https://www.eatsure.com/search/gulab-jamun'),
(124,124,'https://magicpin.in/search/?q=gulab+jamun'),
(125,125,'https://www.dunzo.com/search?q=gulab+jamun'),
(126,126,'https://www.swiggy.com/search?query=rasgulla'),
(127,127,'https://www.zomato.com/pune/search?q=rasgulla'),
(128,128,'https://www.eatsure.com/search/rasgulla'),
(129,129,'https://magicpin.in/search/?q=rasgulla'),
(130,130,'https://www.dunzo.com/search?q=rasgulla'),
(131,131,'https://www.swiggy.com/search?query=chocolate+brownie'),
(132,132,'https://www.zomato.com/pune/search?q=chocolate+brownie'),
(133,133,'https://www.eatsure.com/search/chocolate-brownie'),
(134,134,'https://magicpin.in/search/?q=chocolate+brownie'),
(135,135,'https://www.dunzo.com/search?q=chocolate+brownie'),
(136,136,'https://www.swiggy.com/search?query=ice+cream+sundae'),
(137,137,'https://www.zomato.com/pune/search?q=ice+cream+sundae'),
(138,138,'https://www.eatsure.com/search/ice-cream-sundae'),
(139,139,'https://magicpin.in/search/?q=ice+cream+sundae'),
(140,140,'https://www.dunzo.com/search?q=ice+cream+sundae'),
(141,141,'https://www.swiggy.com/search?query=paneer+tikka'),
(142,142,'https://www.zomato.com/pune/search?q=paneer+tikka'),
(143,143,'https://www.eatsure.com/search/paneer-tikka'),
(144,144,'https://magicpin.in/search/?q=paneer+tikka'),
(145,145,'https://www.dunzo.com/search?q=paneer+tikka'),
(146,146,'https://www.swiggy.com/search?query=chicken+tikka'),
(147,147,'https://www.zomato.com/pune/search?q=chicken+tikka'),
(148,148,'https://www.eatsure.com/search/chicken-tikka'),
(149,149,'https://magicpin.in/search/?q=chicken+tikka'),
(150,150,'https://www.dunzo.com/search?q=chicken+tikka');
