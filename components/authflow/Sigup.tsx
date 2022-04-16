import React from 'react'
import { Auth } from 'aws-amplify';

const Sigup = () => {

async function signUp() {
    try {
        const { user } = await Auth.signUp({
            username:"mtyiska@gmail.com",
            password:"12345678",
        });
        // console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}
  return (
    <button onClick={signUp}>Sigup</button>
  )
}

export default Sigup