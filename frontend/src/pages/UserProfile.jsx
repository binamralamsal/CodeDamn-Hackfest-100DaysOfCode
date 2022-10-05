import { useContext, useEffect, useState } from 'react'
import { AuthContext } from "../context/AuthContext"
import styles from "../styles/pages/UserProfile.module.css"
import { useParams } from 'react-router-dom';
import { Post, CommentDialog } from "../components/"
import { Link } from "react-router-dom"

const UserProfile = () => {
    const [user, setUser] = useState({})

    const { id } = useParams();
    const { getUserProfile, user: currentUser } = useContext(AuthContext)

    const getProfile = () => {
        getUserProfile(id).then(profile => {
            setUser(profile)
        })
    }

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
        getProfile();
    }, [id])

    if (!user.id) return;

    return (
        <div className={styles.userProfile}>
            <div className={styles.userDetails}>
                <img src={user.avatar} className={styles.userAvatar} />
                <div>
                    <div className={styles.nameAndScore}>
                        <p className={styles.name}>{user.name}</p>
                        <p className={styles.score}> ‣ {user.score} Points</p>
                    </div>
                    {id === currentUser?._id && <Link to={`/edit-profile`} className={`${styles.editProfileBtn}`}>Edit Profile</Link>}
                </div>
            </div>

            <div className={styles.posts}>
                {user.posts?.map(post => (
                    <Post post={post} key={post._id} name={user.name} avatar={user.avatar} isSelf={currentUser?._id === post.userId} isProfilePage={true} getPosts={getProfile} onCommentBtnClick={handleCommentBtnClick} />
                ))}
            </div>
            <CommentDialog id={activePostId} isOpen={isCommentPopupOn}
                onClose={handleCloseComments} />
        </div >
    )
}

export default UserProfile;