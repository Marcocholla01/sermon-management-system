import DB from "../database/database.js";
import jwt from "jsonwebtoken";

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
export const deletePost = (req, res) => {
  const token = req.cookies.X_Auth_Token;

  if (!token)
    return res.status(401).json({ message: "You are not authenticated!" });

  jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
    if (error) return res.status(403).json({ message: "Invalid Token" });

    const postID = req.params.id;
    const userID = user.id;

    // console.log(userID);
    // console.log(postID);

    const q = "DELETE FROM `posts` WHERE `postID` = ? AND `userID` = ?";

    DB.query(q, [postID, userID], (error, result) => {
      if (error) {
        return res
          .status(500)
          .json({ message: "You can only delete your own post" });
      }

      if (result.affectedRows === 0) {
        return res.status(403).json({
          message:
            "You can only delete your own post or the post does not exist",
        });
      }
      return res.status(200).json({ message: "Post deleted successfully" });
    });
  });
};
