import {SideMenu}  from "./SideMenu";
import * as React from "react"
import {Header} from "./Header";
import {useAuth} from "../hooks"
import { Login } from "../authflow/Login";
import Sigup from "../authflow/Sigup";
import Confirm from "../authflow/Confirm";
import { AuthFlow } from "../authflow/AuthFlow";

export interface IStickyHeaderProps {
    children?:React.ReactChild
}

const Layout: React.FC<IStickyHeaderProps> = ({children, ...props}) => {
    const {isAuthenticated} = useAuth()
    return (
        <div className="flex flex-col h-screen overflow-y-hidden w-screen">
            <Header/>
            {
                // isAuthenticated ? (
                    <div className="flex h-full">
                <SideMenu/>
                <div className="flex flex-col overflow-y-auto w-full">
                        {children}
                    </div>
                </div>
                // ):
                // <AuthFlow/>
            }
            
        </div>
    )
}

export {Layout}
