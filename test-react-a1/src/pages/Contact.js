import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPhone, faEnvelope, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import '../pages/styles/Contact.css';
const Contact = () => {
    return(
    <>
    <p className='Cont'> <FontAwesomeIcon icon={faPhone} /> tel:676433454556   </p>

    <p className='Cont'> <FontAwesomeIcon icon={faEnvelope} /> email:hajersayeb@gmail.com</p>
    <p className='Cont'> <FontAwesomeIcon icon={faEarthAmericas} /> site:hajer.tn</p>
</>
    )
};
export default Contact;