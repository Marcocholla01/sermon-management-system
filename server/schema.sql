-- Mysql JS>  \sql
-- Mysql SQL>  \connect root@localhost

create database sermon_db;

create table users(
    id int not null primary key auto_increment,
    username varchar (250) not null,
    email varchar (50) not null,
    password varchar (100) not null,
    img varchar (20),
    unique(email)
);

ALTER TABLE users MODIFY img VARCHAR(1000);
ALTER TABLE users MODIFY email VARCHAR(255);

alter table users rename column id to userID;

insert into users(username,email,password,img)
values('Admin','admin@gmail.com','Admin123', "https://www.redswitches.com/wp-content/uploads/2023/02/Select-a-MySQL-Database-on-Linux-via-Command-Line-1024x687.jpg");


CREATE TABLE posts (
    postID int NOT NULL,
    category varchar(45) not null,
    description varchar(10000) not null,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    img varchar(1000),
    userID int,
    PRIMARY KEY (postID),
    FOREIGN KEY (userID) REFERENCES users(userID)
);

-- let query = "SELECT username, email, password FROM users WHERE email = ? ";
--   DB.query(query, [user.email], (err, results) => {
--     if (!err) {
--       if (results.length <= 0) {
--         // hash password
--         const hash = bcrypt.hashSync(user.password, 10);
--         query =
--           "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
--         DB.query(query, [user.username, user.email, hash], (err, results) => {
--           if (!err) {
--             return res
--               .status(200)
--               .json({ message: "Account Successfully Registered" });
--           } else {
--             return res.status(500).json(err);
--           }
--         });
--       } else {
--         return res.status(400).json({ message: "Email Already Exists." });
--       }
--     } else {
--       return res.status(500).json(err);
--     }
--   });