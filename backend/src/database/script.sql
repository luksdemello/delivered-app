create table if not exists tb_products(
	id serial primary key,
	name varchar(30) not null,
	price float8 not null,
	image_uri text not null,
	description text not null
);

create table if not exists tb_orders(
  id serial primary key,
  address varchar not null,
  latitude float8 not null,
  longitude float8 not null,
  moment timestamp without time zone,
  status varchar
);

create table if not exists tb_orders_products(
  order_id int not null,
  product_id int not null,
  primary key (order_id, product_id)
);

alter table tb_orders_products
add constraint FK_PRODUCT 
foreign key(product_id) references tb_products(id);


alter table tb_orders_products
add constraint FK_ORDER 
foreign key(order_id) references tb_orders(id);