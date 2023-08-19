import { Navigation } from '../Navigation/navigation'
import { AuthNav } from 'components/AuthNav/authNav';
import { UserMenu } from 'components/UserMenu/userMenu';
import css from './appBar.module.css'


export const AppBar = () => {
    
    return (
      <header className={css.header}>
        <Navigation />
        <AuthNav />
        <UserMenu />
      </header>
    );
}