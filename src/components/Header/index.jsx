import logo from './images/logo.png'
import search from './images/search.png'
import styles from './header.module.sass'

export default function Header(){
    return (
        <header className={styles.header}>
            <img src={logo} alt="Space-Z logo" />
            <div className={styles.header__container}>
                <input className={styles.header__input} type="text" placeholder="Discovery..."/>
                <img src={search} alt="search icon" />
            </div>
        </header>
    )
}