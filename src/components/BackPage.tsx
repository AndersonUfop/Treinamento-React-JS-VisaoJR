import { BiArrowBack } from 'react-icons/bi';

import { Container } from '../styles/components/BackPage';

export default function BackPage() {
    return (
        <Container>
            <a href="/">
                <BiArrowBack size={32} color="#FFF" />
            </a> 
        </Container>
    );
}