import { useState } from "react";
import './css/contacts.css';
import contactBtn from '../../../assets/contacts/contacts-btn.svg';


function Contacts() {

    const [display, setDisplay] = useState(false);

    return (
        <div className="contacts-container uk-container fixed">
            <div className="contacts">
                <div className="contacts-btn cursor-pointer">
                    <img
                        src={contactBtn} 
                        alt="Contacts Button"
                        onClick={() => {setDisplay(prev => !prev)}}
                        />
                </div>
                <div className={
                    display ? "contacts-icons active" : "contacts-icons"

                }>
                    <a href="" className="icon-contact">
                        <img 
                            src="./src/assets/contacts/whatsapp.svg" 
                            alt="WhatsApp Icon" 
                            />
                    </a>
                    <a href="" className="icon-contact">
                        <img 
                            src="./src/assets/contacts/phone.svg" 
                            alt="Phone Icon" 
                            />
                    </a>
                    <a href="mailto:tileubergenovv@mail.ru" className="icon-contact">
                        <img 
                            src="./src/assets/contacts/email.svg" 
                            alt="Email Icon" 
                            />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contacts;