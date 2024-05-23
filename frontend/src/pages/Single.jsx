import React, { useContext, useEffect, useState } from "react";
import edit from "../assets/images/edit.png";
import Delete from "../assets/images/delete.png";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Menu from "../components/Menu";
import { api } from "../configs/serverUrl";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext";

const Single = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // using use location to get id params
  // const location = useLocation();
  // const postID = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  const [post, setPost] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${api}/posts/${id}`);
        setPost(res.data);
      } catch (error) {
        setError(error.response.data.message);
      }
    };

    fetchData();
  }, [id]);

  // console.log(post.username);
  // console.log(currentUser.username);

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`${api}/posts/${id}`, {
        withCredentials: true,
      });
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          {post.avatar ? (
            <img src={post.avatar} alt="" />
          ) : (
            <img
              src="https://cdn.icon-icons.com/icons2/317/PNG/512/user-female-icon_34335.png"
              alt=""
            />
          )}

          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post.createdAt).fromNow()}</p>
          </div>

          {currentUser?.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=${id}`}>
                <img src={edit} alt="edit-icon" />
              </Link>

              <img onClick={handleDelete} src={Delete} alt="edit-icon" />
            </div>
          )}
          {error && <p className="error">{error}</p>}
        </div>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
      </div>
      <Menu cartegory={post.category} />
    </div>
  );
};

export default Single;
