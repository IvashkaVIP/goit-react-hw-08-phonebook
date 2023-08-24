import { utilitySelectors } from "../utilitySelectors";
import { useSelector } from "react-redux";
import css from './loader.module.css'
// import toast, { Toaster } from 'react-hot-toast';


export const Loader = () => {
    const isLoading = useSelector(utilitySelectors.selectIsLoading);
    // const notify=()=>toast.success('Loading....')
 
    // return (<Toaster/> && loader && notify)
    
    return (isLoading && <h1 className={css.loader}>..... Loading ....... Loading...........</h1>)
}