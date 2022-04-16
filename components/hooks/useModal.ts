import { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '../../redux/features/modalSlice'

function useModal() {
    const isModalOpen = useSelector((state: RootState) => state.isModalOpen.isOpen)
    const dispatch = useDispatch()
    const toggleModal = () => dispatch(toggle())
    return {isModalOpen,toggleModal}
}

export {useModal}