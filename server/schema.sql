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

CREATE TABLE posts (
    postID int NOT NULL,
    title varchar(100) not NULL,
    category varchar(45) not null,
    description varchar(10000) not null,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    img varchar(1000),
    userID int,
    PRIMARY KEY (postID),
    FOREIGN KEY (userID) REFERENCES users(userID)
);

ALTER TABLE users MODIFY img VARCHAR(1000);
ALTER TABLE users MODIFY email VARCHAR(255);

alter table users rename column id to userID;

insert into users(username,email,password,img)
values('Admin','admin@gmail.com','Admin123', "https://www.redswitches.com/wp-content/uploads/2023/02/Select-a-MySQL-Database-on-Linux-via-Command-Line-1024x687.jpg");




-- Data to start with
INSERT INTO posts(title,category,description,img,userID)
values("Installing Next.js with Tailwind CSS: A Seamless Integration Guide","art","Next.js, a popular React framework, takes front-end development to the next level by providing a streamlined and efficient development experience. When paired with Tailwind CSS, a utility-first CSS framework, you can create visually stunning and responsive web applications effortlessly. In this blog post, we'll guide you through the steps to install Next.js with Tailwind CSS for a seamless development experience.","https://firebasestorage.googleapis.com/v0/b/mern-blog-test-8ff4d.appspot.com/o/1708829612247-Screenshot%202023-11-22%20at%209.47.52%E2%80%AFam.png?alt=media&token=14c6f9bd-3336-4d08-ab9a-bbf3f7585514", 6),
("Crafting a MERN Stack Application with Tailwind CSS and TypeScript: A Step-by-Step Guide","technology","Developing a MERN (MongoDB, Express.js, React.js, Node.js) stack application is an exciting journey, and enhancing it with the utility-first styling of Tailwind CSS and the strong typing capabilities of TypeScript adds a layer of efficiency and structure. In this comprehensive guide, we'll walk through the detailed process of building a MERN app, incorporating Tailwind CSS and TypeScript for a well-rounded and scalable development experience.", "https://firebasestorage.googleapis.com/v0/b/mern-blog-test-8ff4d.appspot.com/o/1708829208908-Screenshot%202024-02-25%20at%209.46.38%E2%80%AFam.png?alt=media&token=27a6ab25-ac74-44e9-9ad2-116d020ecf86", 6)

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