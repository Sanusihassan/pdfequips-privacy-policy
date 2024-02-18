import type { NextPage } from 'next';
import Navbar from 'pdfequips-navbar';
import { Content } from '../components/Content';

const PrivacyPolicy: NextPage = () => {
    return (
        <div>
            <Navbar path='privacy-policy' />
            <Content />
        </div>
    );
};


export default PrivacyPolicy;
