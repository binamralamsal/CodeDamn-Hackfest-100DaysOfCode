import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import { AiOutlineEllipsis } from "react-icons/ai";
import styles from "../styles/components/postMenu.module.css";
import { useContext, useState } from "react";
import { PostsContext } from "../context/PostsContext";
import DeleteDialog from "./DeleteDialog";

export default function ({ id, content }) {
  let [isOpen, setIsOpen] = useState(false);

  const { deletePost, getPosts } = useContext(PostsContext);

  const deleteBtnClick = async () => {
    setIsOpen(false);
    await deletePost(id);
    getPosts();
  };

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURI(content)}&hashtags=100DaysOfCode`

  return (
    <div className={styles.postMenuEnd}>
      <Menu>
        <Menu.Button>
          <AiOutlineEllipsis size={21} />
        </Menu.Button>
        <Menu.Items className={styles.items}>
          <Menu.Item>
            {({ active }) => (
              <Link
                className={`${active ? styles.active : ""} ${styles.item}`}
                to={`/edit/${id}`}
              >
                Edit
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`${active ? styles.active : ""} ${styles.item}`}
                href={tweetUrl}
                target="_blank"
              >
                Tweet
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${active ? styles.active : ""} ${styles.item}`}
                onClick={() => setIsOpen(true)}
              >
                Delete
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
      <DeleteDialog
        onDelete={deleteBtnClick}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
