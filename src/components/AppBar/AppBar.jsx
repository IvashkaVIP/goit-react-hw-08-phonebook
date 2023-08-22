import { useSelector } from "react-redux/es/hooks/useSelector";
import { authSelectors } from "redux/auth/authSelectors";
import { UserMenu } from "components/UserMenu/userMenu";
import { AuthNav } from "components/AuthNav/authNav";
import css from './AppBar.module.css'


export const AppBar = () => {
     const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

     return (
       <header className={css.header}>
         {/* <Navigation /> */}
         {isLoggedIn ? <UserMenu /> : <AuthNav />}
       </header>
     );


}