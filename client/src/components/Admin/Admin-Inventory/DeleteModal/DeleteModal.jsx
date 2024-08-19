import React from "react";
import styles from './DeleteModal.module.css';

export const DeleteModal = ({ isOpen, isCancel, isConfirm }) => {
    return (
        <div className={`${styles['modal']} ${isOpen ? 'show' : 'hide'}`}>
            <div className={styles['modal-content']}>
                <p className={styles.content}>Are you sure you want to delete?</p>
                <button className={styles['cancel-btn']} onClick={isCancel}>Cancel</button>
                <button className={styles['delete-btn']} onClick={isConfirm}>Delete</button>
            </div>
        </div>
    )
}