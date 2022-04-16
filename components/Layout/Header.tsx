import { RiLogoutCircleLine} from "react-icons/ri";
import {GiHamburgerMenu} from "react-icons/gi"
import {useSideBar, useAuth} from "../hooks"

const Header = () =>{
    const {toggleSidbar} = useSideBar()
    const {removeAuthenticateUser, isAuthenticated} = useAuth()

    return (
        <nav >
            <div className="flex w-full justify-between text-gray-100 border-b border-gray-700 bg-blue-400">
                <button onClick={()=>console.log("router here")} className="block p-4 text-black-button-mike font-bold no-underline">Ping Pong App</button>
                
                <button className="md:hidden p-4 focus:outline-none hover:bg-gray-700" onClick={() => toggleSidbar()}>
                    <GiHamburgerMenu size="24" className="text-black-button-mike"/>
                </button>
                {isAuthenticated && 
                    (<div className="hidden md:flex md:items-center p-4 focus:outline-none hover:bg-gray-700">
                        <button onClick={() =>removeAuthenticateUser()}>
                            <RiLogoutCircleLine size="24" className="text-black-button-mike" />
                        </button>
                    </div>)
                }
            </div>
        </nav>

    );
}

export {Header};
