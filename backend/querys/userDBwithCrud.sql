Create schema if not exists ecomerce_users;

use ecomerce_users;

create table users (
	id INT not null auto_increment,
    name varchar(45) not null,
    email varchar(255) not null,
    password varchar(45) not null,
    address varchar(255) null,
    creation_time DATETIME default current_timestamp,
    modification_time DATETIME on update current_timestamp,
    administrator bool default false,
    primary key(id)
);

insert into users (name, email, password) values("Nahuel","adsa@das.com","asdasd");

select * from users;

update users
set 
	administrator = true
where
	id = 1;
	