import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faYoutube,
    faFacebookF,
    faInstagram,
    faTripadvisor
} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Social = () => {
    return (
        <div className="social-div">
            <ul>
                <li><Link href="#"><a><FontAwesomeIcon icon={faFacebookF} className="socail-icons facebook" /></a></Link></li>
                <li><Link href="https://www.tripadvisor.com/Restaurant_Review-g499478-d5317324-Reviews-Henlow_Tandoori-Henlow_Bedfordshire_England.html"><a><FontAwesomeIcon icon={faTripadvisor} className="socail-icons tripadvisor" /></a></Link></li>
                <li><Link href="#"><a><FontAwesomeIcon icon={faInstagram} className="socail-icons instagram" /></a></Link></li>
            </ul>
        </div>
    );
}
 
export default Social;