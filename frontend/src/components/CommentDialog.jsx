import { useEffect, useContext, useState } from "react";
import { Dialog } from "@headlessui/react";
import styles from "../styles/components/dialog.module.css";
import { PostsContext } from "../context/PostsContext"
import { AuthContext } from "../context/AuthContext"
import TimeAgo from 'react-timeago'
import { IoMdClose } from 'react-icons/io'

function CommentDialog({ isOpen, id, onClose }) {
    const { getPost, addComment } = useContext(PostsContext);
    const { user } = useContext(AuthContext)

    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([]);

    const fetchPost = async () => {
        if (id) {
            const post = await getPost(id)
            setComments(post.comments.reverse())
        }
    }

    useEffect(() => {
        fetchPost();

        return () => setComments([]);
    }, [id])

    const handleAddComment = async (event) => {
        event.preventDefault();

        const comments = await addComment(id, comment);
        setComment("")
        fetchPost();
    }

    return (
        <Dialog open={isOpen} onClose={onClose} className={styles.dialog}>
            <Dialog.Overlay className={styles.backdrop} />
            <Dialog.Panel className={styles.panel}>
                <div className={styles.commentBoxUpper}>
                    <Dialog.Title className={styles.commentTitle}>Comments ({comments.length}) </Dialog.Title>
                    <button className={`${styles.closeButton}`} onClick={onClose}>
                        <IoMdClose size={22} />
                    </button>
                </div>
                {user && <form onSubmit={handleAddComment} className={styles.addCommentForm}>
                    <img src={user.avatar} className={styles.addCommentAvatar} />
                    <div className={styles.addCommentMain}>
                        <textarea cols="30" rows="10" value={comment} onChange={e => setComment(e.target.value)} className={styles.addCommentInput} placeholder='Add a comment...'></textarea>
                        <button type="submit" className={`btn btn-primary ${styles.addCommentBtn}`}>Comment</button>
                    </div>
                </form>}

                <div className={styles.comments}>
                    {comments.map(comment => <div key={comment._id} className={styles.comment}>
                        <img src={comment.userId.avatar} className={styles.commentAvatar} />
                        <div className={styles.commentContent}>
                            <div className={styles.commentUpper}>
                                <p className={styles.commentAuthor}>{comment.userId.name}</p>
                                <p className={styles.commentTime}>
                                    <TimeAgo date={comment.createdAt} />
                                </p>
                            </div>
                            <p className={styles.commentText}>{comment.content}</p>
                        </div>
                    </div>)}
                </div>
            </Dialog.Panel>
        </Dialog>
    );
}

export default CommentDialog;
