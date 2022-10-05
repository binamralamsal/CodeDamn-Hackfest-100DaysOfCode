import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  });

  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const result = await axios.post("/api/users/login", { email, password });

      localStorage.setItem("user", JSON.stringify(result.data));
      setUser(result.data);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleRegister = async (name, email, password, avatar) => {
    try {
      const result = await axios.post("/api/users", {
        name,
        email,
        password,
        avatar,
      });
      if (!result.data) throw new Error("");

      localStorage.setItem("user", JSON.stringify(result.data));
      setUser(result.data);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleEditProfile = async (name, email, avatar) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const result = await axios.put(
        `/api/users/profile/${user._id}`,
        { name, email, avatar },
        config
      );

      localStorage.setItem("user", JSON.stringify(result.data));
      setUser(result.data);
      navigate(`/user/${result.data._id}`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  const getUserProfile = async (id) => {
    try {
      const result = await axios.get(`/api/users/profile/${id}`);

      return result.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const getLeaderboard = async () => {
    try {
      const result = await axios.get("/api/leaderboard");

      return result.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        handleLogin,
        handleRegister,
        handleLogout,
        getUserProfile,
        handleEditProfile,
        getLeaderboard,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
