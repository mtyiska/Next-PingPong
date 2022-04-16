import * as React from 'react'
import { Auth } from 'aws-amplify';

const Confirm = () => {
    const [username, setUsername] = React.useState('')
    const [code, setCode] = React.useState('')

async function confirmSignUp() {

    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}
  return (
    <div className='flex'>
        <input value={username} onChange={(e) =>setUsername(e.target.value)}/> 
        <input value={code} onChange={(e) =>setCode(e.target.value)}/>
        <button onClick={confirmSignUp}>Verify</button>
        </div>
  )
}

export default Confirm