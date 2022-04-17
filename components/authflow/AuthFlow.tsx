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
       updateFormState(() => ({ ...formState, formType: "signedIn" }));
     } catch (err) {
       console.log("checkUser error", err);
       updateFormState(() => ({ ...formState, formType: "signIn" }));
     }
   };
 
   const setAuthListener = async () => {
     Hub.listen("auth", (data) => {
       switch (data.payload.event) {
         case "signOut": 
           updateFormState(() => ({
             ...formState,
             formType: "signIn",
           }));
           break;
         case "signIn":
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
 
   return (
     <>
 
       {formType === "signUp" && (
        <div className="flex justify-center">
          <div className="w-1/2 flex flex-col pb-12">
             <input className="mt-8 border rounded p-4"
             name="email" onChange={onChange} placeholder="email" />
              <input
                className="mt-8 border rounded p-4"
                name="password"
                type="password"
                onChange={onChange}
                placeholder="password"
              />
              <button 
              className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg"
              onClick={signUp}>Sign Up</button>
              <div className="flex justify-center cursor-pointer py-3 mt-3 bg-blue-500">
                <button
                  onClick={() =>
                    updateFormState(() => ({
                      ...formState,
                      formType: "signIn",
                    }))
                  }
                  >
                  Already signed up? Sign In instead
                </button>
             </div>
          </div>
         </div>
       )}
 
       {formType === "confirmSignUp" && (
         <div className="flex justify-center">
          <div className="w-1/2 flex flex-col pb-12">
            <input
              className="mt-8 border rounded p-4"
              name="authCode"
              onChange={onChange}
              placeholder="cnfirm auth code"
            />
            <button 
            className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg"
            onClick={confirmSignUp}>Confirm Sign up</button>
          </div>
         </div>
       )}
 
       {formType === "signIn" && (
        <div className="flex justify-center">
          <div className="w-1/2 flex flex-col pb-12">
           <input 
           className="mt-8 border rounded p-4"
           name="email" onChange={onChange} placeholder="email" />
           <input
            className="mt-8 border rounded p-4"
             name="password"
             type="password"
             onChange={onChange}
             placeholder="password"
           />
           <button 
           className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg"
           onClick={signIn}>Sign In</button>
 
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