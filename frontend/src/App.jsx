import { Routes, Route } from "react-router-dom";

import {
  Home,
  Login,
  Register,
  Logout,
  CreatePost,
  EditPost,
  UserProfile,
  EditProfile,
  Guides,
} from "./pages";
import { Navbar } from "./components";
import { AuthProvider, PostsProvider } from "./context";
import { ProtectedRoutes, NotLoggedInRoutes } from "./utils";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <PostsProvider>
        <Navbar />
        <div className="container">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/user/:id" element={<UserProfile />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/create" element={<CreatePost />} />
              <Route path="/edit/:id" element={<EditPost />} />
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path="/logout" element={<Logout />} />
            </Route>
            <Route element={<NotLoggedInRoutes />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
        </div>
      </PostsProvider>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
