import { changeFocusStateAction } from '../pages/search/store/actionCreators'
import { useDispatch } from 'react-redux'

export function useChangeDropBoxState(state = false) {
  const dispatch = useDispatch()
  return () => {
    dispatch(changeFocusStateAction(state))
  }
}


