import React, { useState } from 'react'
import api from '../../services/api';

export default function Login( { history }) {
    //user state returns a vector 
    //email and setEmail
    const [email, setEmail] = useState('')
    async function handleSubmit(event) {
        event.preventDefault()
        const response = await api.post('/sessions', { email });

        //grabbing only the id 
        const { _id } = response.data;

        //save id in the browser's storage
        localStorage.setItem('user', _id);

        //navigation in an automatic manner.
        //after inputting email it will redirect the user to the dashboard page
        history.push('/dashboard')

    }
    
    return(
        //react doesnt allow us to have elements in different components without
        //being inside a container, so in order not to mess with the css we can 
        //add an empty <>
        <>
            <p>
            Offer <strong>spots</strong> for prgrammers and find new <strong>talents</strong> for your business
            </p>
            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-Mail *</label>
            <input 
                type="email" 
                id= "email"
                placeholder= "Youremail@something.com"
                value={email}
                onChange={event => setEmail(event.target.value)}
                />
                <button type="submit" className="btn">Join</button>
            </form>
         </>
    )
}