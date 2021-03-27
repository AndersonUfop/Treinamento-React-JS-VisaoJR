import { SideBarContainer } from '../styles/components/Sidebar';

import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

export function SideBar() {
    return (
        <SideBarContainer>
            <FaUserAlt className="userIcon" size={24}/>
            <a href="login">
                <AiOutlineClose className="closeIcon" size={24}/>
            </a>
        </SideBarContainer>
    );
}