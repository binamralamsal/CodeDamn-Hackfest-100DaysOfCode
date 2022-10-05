import { createContext, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

export const PostsContext = createContext();

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  const getPosts = async () => {
    try {
      const { data } = await axios.get("/api/posts");
      setPosts(data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const getPost = async (id) => {
    try {
      const { data } = await axios.get(`/api/posts/${id}`);
      return data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const createPost = async (content, image, githubLink, liveDemoLink) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const result = await axios.post(
        "/api/posts/create",
        { content, image, githubLink, liveDemoLink },
        config
      );
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const editPost = async (id, content, image, githubLink, liveDemoLink) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };

      const result = await axios.put(
        `/api/posts/update/${id}`,
        { content, image, githubLink, liveDemoLink },
        config
      );
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const deletePost = async (id) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };

      const result = await axios.delete(`/api/posts/delete/${id}`, config);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const likePost = async (_id) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const result = await axios.put(`/api/posts/like/${_id}`, null, config);
      return result.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const addComment = async (postId, content) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const result = await axios.post(
        `/api/posts/comment`,
        { postId, content },
        config
      );
      return result.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        createPost,
        getPosts,
        likePost,
        setPosts,
        getPost,
        editPost,
        deletePost,
        addComment,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
