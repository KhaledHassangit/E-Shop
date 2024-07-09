import {useEffect} from 'react'
import {useSelector ,useDispatch} from "react-redux"
import getAllCategory from '../../../Redux/Actions/CategoryActions'

export const HomeCategoryHook = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCategory(5))
    }, [])

    const category = useSelector((state) => state.allCategory.category)
    const loading = useSelector((state) => state.allCategory.loading)

    const CategoryColors=["#FFD3E8","#F4DBA5","#55CFDF","#0034FF","#FFD3E8"]

    return[category,loading,CategoryColors]
}
