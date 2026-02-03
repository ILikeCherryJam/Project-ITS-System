import { useState } from "react";
import './css/contacts.css';


function Contacts() {

    const [display, setDisplay] = useState(false);

    return (
        <div className="contacts-container uk-container fixed">
            <div className="contacts">
                <div className="contacts-btn cursor-pointer">
                    <img
                        src="./src/assets/contacts/contacts-btn.svg" 
                        alt="Contacts Button"
                        onClick={() => {setDisplay(prev => !prev)}}
                        />
                </div>
                <div className={
                    display ? "contacts-icons active" : "contacts-icons"

                }>
                    <img 
                        src="./src/assets/contacts/whatsapp.svg" 
                        alt="WhatsApp Icon" 
                        />
                    <img 
                        src="./src/assets/contacts/phone.svg" 
                        alt="Phone Icon" 
                        />
                    <img 
                        src="./src/assets/contacts/email.svg" 
                        alt="Email Icon" 
                        />
                </div>
            </div>
        </div>
    );
}

export default Contacts;