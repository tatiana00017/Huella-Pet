CREATE TABLE users (
  id_user INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  last_name VARCHAR(255),
  address VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  cat BOOLEAN,
  dog BOOLEAN,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE category (
  id_category INT PRIMARY KEY AUTO_INCREMENT,
  category_name VARCHAR(255)
);

CREATE TABLE product (
  id_product INT PRIMARY KEY AUTO_INCREMENT,
  id_category INT,
  product_name VARCHAR(255),
  description TEXT,
  price DOUBLE,
  img_url VARCHAR(255),
  stock INT,
  FOREIGN KEY (id_category) REFERENCES category (id_category)
);

CREATE TABLE favorites (
  id_user INT,
  id_product INT,
  FOREIGN KEY (id_user) REFERENCES users (id_user),
  FOREIGN KEY (id_product) REFERENCES product (id_product)
);

CREATE TABLE shopping_cart (
  id_shopping_cart INT PRIMARY KEY AUTO_INCREMENT,
  id_user INT,
  id_product INT,
  quantity INT,
  FOREIGN KEY (id_user) REFERENCES users (id_user),
  FOREIGN KEY (id_product) REFERENCES product (id_product)
);

CREATE TABLE my_shopping (
  id_my_shopping INT PRIMARY KEY AUTO_INCREMENT,
  id_factura VARCHAR(255),
  id_user INT,
  order_date DATE,
  delivery_date DATE,
  state VARCHAR(50),  
  delivery_address VARCHAR(255),
  total DOUBLE,
  FOREIGN KEY (id_user) REFERENCES users (id_user),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE detail_shopping (
  id_detail_shopping INT PRIMARY KEY AUTO_INCREMENT,
  id_my_shopping INT,
  id_product INT,
  quantity INT,
  unit_price DOUBLE,
  FOREIGN KEY (id_my_shopping) REFERENCES my_shopping (id_my_shopping),
  FOREIGN KEY (id_product) REFERENCES product (id_product)
);

CREATE TABLE education (
  id_education INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  focus VARCHAR(255),
  img_education VARCHAR(255),
  description TEXT
);

CREATE TABLE adoptions (
  id_adoptions INT PRIMARY KEY AUTO_INCREMENT,
  img1 VARCHAR(255),
  img2 VARCHAR(255),
  img3 VARCHAR(255),
  name VARCHAR(255),
  species VARCHAR(255),
  gender VARCHAR(255),
  age INT,
  breed VARCHAR(255),
  conditions TEXT,
  description TEXT
);

CREATE TABLE events (
  id_events INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  img VARCHAR(255),
  date DATE,
  hour TIME,
  city VARCHAR(255),
  address VARCHAR(255),
  description_text TEXT
);

CREATE TABLE form (
  id_form INT PRIMARY KEY AUTO_INCREMENT,
  document VARCHAR(255),
  name VARCHAR(255),
  last_name VARCHAR(255),
  age INT,
  address VARCHAR(255),
  profession VARCHAR(255),
  type_of_house VARCHAR(255),
  email VARCHAR(255),
  pet BOOLEAN,
  description_family TEXT
);
