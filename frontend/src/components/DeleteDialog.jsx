import { Dialog } from "@headlessui/react";
import styles from "../styles/components/dialog.module.css";

function DeleteDialog({ isOpen, onDelete, onClose }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className={styles.dialog}>
      <Dialog.Overlay className={styles.backdrop} />
      <Dialog.Panel className={styles.panel}>
        <Dialog.Title>Delete post</Dialog.Title>
        <Dialog.Description>
          This will permanently delete your post
        </Dialog.Description>

        <div className={styles.buttonGroup}>
          <button onClick={onDelete} className="btn btn-danger">
            Delete
          </button>
          <button onClick={onClose} className="btn">
            Cancel
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

export default DeleteDialog;
