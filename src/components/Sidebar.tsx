import styles from '../styles/components/Sidebar.module.css';

import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

export function SideBar() {
    return (
        <div className={styles.sidebarContainer}>
            <FaUserAlt className={styles.userIcon} size={24}/>
            <AiOutlineClose className={styles.closeIcon} size={24}/>
        </div>
    );
}