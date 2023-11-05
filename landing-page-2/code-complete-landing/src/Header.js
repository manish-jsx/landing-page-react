// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserList from './UserList';

function Header() {
    return (
        <header>
            <h1>Code Complete by @manish.code</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/admin-login">Admin Login</Link>
                    </li>
                    <li>
                        <Link to="/admin-panel">Admin Panel</Link>
                    </li>
                    <li> <ComingSoon /> </li>
                    <li> <ContactForm /> </li>
                    <li>  <UserList /> </li>
                    
                </ul>
            </nav>
        </header>
    );
}

  function ComingSoon() {
    return <div className="coming-soon">COMING SOON</div>;
  }
  
  function ContactForm() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            occupation: formData.get('occupation'),
        };
        
        try {
            await axios.post('http://localhost:3001/register', data);
            alert('Registration Successful');
        } catch (error) {
            alert('Registration Failed');
        }
    };
    
    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
            </div>
            <div className="form-group">
                <label>
                    Email ID:
                    <input type="email" name="email" required />
                </label>
            </div>
            <div className="form-group">
                <label>
                    Occupation:
                    <input type="text" name="occupation" />
                </label>
            </div>
            <input type="submit" value="Register" className="submit-button" />
        </form>
    );
  }
  

  
export default Header;
