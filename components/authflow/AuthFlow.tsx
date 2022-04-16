 import React, { useEffect, useState } from "react";
 import {useAuth} from "../hooks/useAuth"
 import { Auth, Hub } from "aws-amplify";
 
 const initialFormState = {
   password: "",
   email: "",
   authCode: "",
   formType: "signIn",
 };
 
 function AuthFlow() {
   const [formState, updateFormState] = useState(initialFormState);
   const {authenticateUser} = useAuth()
 
   const [user, updateUser] = useState<any>(null);
 
   const checkUser = async () => {
     try {
       const user = await Auth.currentAuthenticatedUser();
 
       updateUser(user);
 
      //  console.log("got user", user);
 
       updateFormState(() => ({ ...formState, formType: "signedIn" }));
     } catch (err) {
       console.log("checkUser error", err);
       updateFormState(() => ({ ...formState, formType: "signIn" }));
     }
   };
 
   // Skip this if you're not using Hub. You can call updateFormState function right
   // after the Auth.signOut() call in the button.
   const setAuthListener = async () => {
     Hub.listen("auth", (data) => {
       switch (data.payload.event) {
         case "signOut":
          //  console.log(data);
 
           updateFormState(() => ({
             ...formState,
             formType: "signIn",
           }));
 
           break;
         case "signIn":
          //  console.log(data);
 
           break;
       }
     });
   };
 
   useEffect(() => {
     checkUser();
     setAuthListener();
   }, []);
 
   const onChange = (e:any) => {
     e.persist();
     updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }));
   };
 
   const { formType } = formState;
 
   const signUp = async () => {
     const { email, password } = formState;
 
     await Auth.signUp({ username:email, password });
 
     updateFormState(() => ({ ...formState, formType: "confirmSignUp" }));
   };
 
   const confirmSignUp = async () => {
     const { email, authCode } = formState;
 
     await Auth.confirmSignUp(email, authCode);
 
     updateFormState(() => ({ ...formState, formType: "signIn" }));
   };
 
   const signIn = async () => {
     const { email, password } = formState;
 
     await Auth.signIn(email, password);
     authenticateUser()
 
     updateFormState(() => ({ ...formState, formType: "signedIn" }));
   };
 
   // console.log(formType);
 
   return (
     <>
 
       {formType === "signUp" && (
         <div>
             <input name="email" onChange={onChange} placeholder="email" />
           <input
             name="password"
             type="password"
             onChange={onChange}
             placeholder="password"
           />
 
           <button onClick={signUp}>Sign Up</button>
 
           <p>Already signed up?</p>
 
           <button
             onClick={() =>
               updateFormState(() => ({
                 ...formState,
                 formType: "signIn",
               }))
             }
           >
             Sign In instead
           </button>
         </div>
       )}
 
       {formType === "confirmSignUp" && (
         <div>
           <input
             name="authCode"
             onChange={onChange}
             placeholder="cnfirm auth code"
           />
           <button onClick={confirmSignUp}>Confirm Sign up</button>
         </div>
       )}
 
       {formType === "signIn" && (
         <div>
           <input name="email" onChange={onChange} placeholder="email" />
           <input
             name="password"
             type="password"
             onChange={onChange}
             placeholder="password"
           />
           <button onClick={signIn}>Sign In</button>
 
           <p>No account yet?</p>
 
           <button
             onClick={() =>
               updateFormState(() => ({
                 ...formState,
                 formType: "signUp",
               }))
             }
           >
             Sign Up now
           </button>
         </div>
       )}
 
       {user && formType === "signedIn" && (
         <div>
           <h2>
             Welcome the app, {user.username} ({user.attributes.email})!
           </h2>
 
           <button
             onClick={() => {
               Auth.signOut();
             }}
           >
             Sign out
           </button>
         </div>
       )}
 
       <hr />
     </>
   );
 }
 
 export {AuthFlow};