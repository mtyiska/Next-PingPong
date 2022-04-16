import * as React from "react";
import {IoIosAddCircleOutline} from "react-icons/io"
import {useSideBar, useModal} from "../hooks"


const SideMenu: React.FC= () =>{   
    const {isSidbarOpen} = useSideBar()
    const {toggleModal} = useModal()
    
    return(
        <nav style={{zIndex:2}} className={`bg-white border-r border-gray-300/50 shadow-lg shadow-gray-300 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${isSidbarOpen? "translate-x-0":"-translate-x-full"} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>          
            <div >
                <button onClick={()=>toggleModal()} className="flex items-center w-full px-3 py-2 space-x-3 rounded transition duration-200 text-gray-700 hover:bg-blue-700 hover:text-gray-200 active:font-semibold no-underline cursor-pointer">
                    <span><IoIosAddCircleOutline size={32} /></span>                
                    <h3 className="uppercase tracking-wide font-semibold text-xs active:text-gray-100"> Add Stats</h3>
        
                </button>
            </div>
        </nav>
    )
}

export {SideMenu}

