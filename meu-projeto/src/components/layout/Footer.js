import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.modules.css';

function Footer(){
    return (
        <footer> 
           <ul className={styles.socialList}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
           </ul>
            
            <p>Rodapé</p>
        </footer>
    )
}

export default Footer;