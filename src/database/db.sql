create database books;
use books;
create table Books(
	id int primary key auto_increment,
    name varchar(255),
    description text,
    price int,
    created_at datetime,
    updated_at datetime
);

create table Book_Author(
	id int primary key auto_increment,
    book_id int,
    author_id int
);
create table author(
	id int primary key auto_increment,
    name varchar(255),
    biography text
);