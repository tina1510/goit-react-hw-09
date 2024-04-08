import { ThreeDots } from 'react-loader-spinner';
import css from "./Loader.module.css"
const Loader = () => {
    return (
        <div className={css.loaderContainer}><ThreeDots></ThreeDots></div>
        
    )
}
export default Loader;