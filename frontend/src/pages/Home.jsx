import { useContext, useEffect, useState } from "react";
import { PostsContext } from "../context/PostsContext";
import { AuthContext } from "../context/AuthContext";
import styles from "../styles/pages/Home.module.css";
import { Post, Leaderboard, CommentDialog, ChallengeCard } from "../components"

const Home = () => {
  const { posts, getPosts } = useContext(PostsContext);
  const { user } = useContext(AuthContext);

  const [isCommentPopupOn, setIsCommentPopupOn] = useState(false);
  const [activePostId, setActivePostId] = useState();

  const handleCommentBtnClick = async (postId) => {
    setActivePostId(postId);
    setIsCommentPopupOn(true);
  }

  const handleCloseComments = () => {
    setActivePostId();
    setIsCommentPopupOn(false)
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={styles.homepage}>
      <div className={styles.posts}>
        {posts?.map((post) => (
          <Post post={post} key={post._id} isSelf={user?._id === post.userId._id} onCommentBtnClick={handleCommentBtnClick} />
        ))}
      </div>
      <CommentDialog id={activePostId} isOpen={isCommentPopupOn}
        onClose={handleCloseComments} />
      <div className={styles.sidebar}>
        <Leaderboard />
        <ChallengeCard />
      </div>
    </div>
  );
};

export default Home;
