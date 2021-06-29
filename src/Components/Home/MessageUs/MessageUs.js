import React, { createContext, useContext } from 'react';
import emailjs from 'emailjs-com';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './MessageUs.css'

const MessageUs = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    
    let historyToLogin = useHistory();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_fvs637j', 'template_ly8fru8', e.target, 'user_49awXJo2E6GemxwSwLUev')
            .then((result) => {
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
       <main className="messageUs-container my-4" id="contact">
           <div className="contactMain-part mt-5 py-5 my-3 mb-5" id="contactUs">
            <div id="contactUs-form">
            <h1 className="text-center mt-3 mb-4"><span className=" contactSection-headline stylish-font">Contact us</span></h1>
            <form className="contact-form " onSubmit={sendEmail}>
            
            <div class="mb-3 w-100 m-auto">
                <label for="exampleFormControlInput1" class="form-label">Name: </label>
                <input type="text" defaultValue={loggedInUser.displayName} name="user_name" class="form-control " id="exampleFormControlInput1" placeholder="John Doe" required/>
            </div>
       
            <div class="mb-3 w-100 m-auto">
                <label for="exampleFormControlInput2" class="form-label">Email: </label>
                <input type="email" defaultValue={loggedInUser.email} readOnly name="user_email" class="form-control" id="exampleFormControlInput2" placeholder="It will be auto filled up automatically.."  required/>
            </div>
            <div class="mb-3 w-100 m-auto">
                    <label for="exampleFormControlTextarea1" class="form-label">Message: </label>
                    <textarea name="message" class="form-control " id="exampleFormControlTextarea1" placeholder="It's looking good..." rows="3" required></textarea>
            </div>
         
            <div class="mb-3 w-100 m-auto">
            {
                (!loggedInUser.email)?<button onClick={() => historyToLogin.push('/login')} className="btn stylish-btn fs-4">Please, Sign in to send message</button> :<button className="btn stylish-btn" type="submit">Submit</button>
            }
            </div>
           </form>
            </div> 
        </div>
       </main>
    );
};

export default MessageUs;