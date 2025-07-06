// src/pages/HomePage.jsx
import FloatingTitle from '../components/FloatingTitle';
import Badge from '../components/Badge';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from '../components/Badge.module.css';



export const HomePage = () => {

    const handleBadgeClick = (platform) => {
        let url = '';
        switch (platform) {
            case 'github':
                url = 'https://github.com/FabroTorresD';
                break;
            case 'linkedin':
                url = 'https://linkedin.com/in/Fabrizio-Torres-Daniele';
                break;
            case 'email':
                url = 'fabrotorres3@gmail.com';
                break;
            default:
                break;
        }
        if (url) {
            window.open(url);
        }
    };

    return (
        <>
            <div className="home-page">
                <FloatingTitle text="Hello, I'm Fabrizio" />
                <h1 className='subtitle'>Software Developer</h1>
                <p>This is the home page of my portfolio website.</p>
                <p>Here you can find information about my projects, skills, and experience.</p>
            </div>
            <div className={styles.badgeContainer}>
                <Badge icon={<FaGithub size={20} />} onClick={() => handleBadgeClick('github')} />
                <Badge icon={<FaLinkedin size={20} />} onClick={() => handleBadgeClick('linkedin')} />
                <Badge icon={<FaEnvelope size={20} />} onClick={() => handleBadgeClick('linkedin')} />
            </div>
        </>
    );
}
