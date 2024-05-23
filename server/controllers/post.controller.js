import DB from "../database/database.js";

export const getPosts = (req, res) => {
  const q = req.query.cartegory
    ? "SELECT * FROM  posts WHERE category = ?"
    : "SELECT * FROM posts";

  DB.query(q, [req.query.cartegory], (error, data) => {
    if (error) return res.status(500).json("Something went wrong");
    if (!data) return res.status(404).json("No data found");

    return res.status(200).json(data);
  });
};
export const getPost = (req, res) => {
  const { id } = req.params;
  const q =
    "SELECT `username`, `title`, `description`, p.img, u.img AS avatar, `category`, `createdAt` FROM users u JOIN posts p ON u.userID=p.postID WHERE p.postID = ? ";
  DB.query(q, [id], (error, data) => {
    if (error) return res.status(500).json("Something went wrong");
    if (!data) return res.status(404).json("No data found");
    return res.status(200).json(data[0]);
  });
};
export const addPost = (req, res) => {};
export const updatePost = (req, res) => {};
export const deletePost = (req, res) => {};
