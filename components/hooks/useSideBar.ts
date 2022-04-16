import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '../../redux/features/sidebarSlice'

function useSideBar() {
    const isSidbarOpen = useSelector((state: RootState) => state.isSidbarOpen.isOpen)
    const dispatch = useDispatch()
    const toggleSidbar = () => dispatch(toggle())
    return {isSidbarOpen,toggleSidbar}
}

export {useSideBar}