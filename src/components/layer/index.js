import * as React from 'react'
import { Link } from 'gatsby'
import { header, headerList, navItem, navLink, mainContent, footer, parent, SNSIcon } from './layer.module.css'
import TwitterIcon from '/assets/twitter.svg'
import GithubIcon from '/assets/github.svg'
import ZennIcon from '/assets/zenn.svg'

const Layer = ({PageTitle, children}) => {
    return (
        
        <div className={parent}>
            <title>{PageTitle} | Luke</title>
            <header className={header}>
                <Link to='/'><h1>Luke</h1></Link>
                <ul className={headerList}>
                    <li className={SNSIcon}><Link to='https://twitter.com/luke02561'><span><TwitterIcon className={SNSIcon}/></span></Link></li>
                    <li className={SNSIcon}><Link to='https://github.com/luke256'><span><GithubIcon className={SNSIcon}/></span></Link></li>
                    <li className={SNSIcon}><Link to='https://zenn.dev/luke256'><span><ZennIcon className={SNSIcon}/></span></Link></li>
                </ul>
                <ul className={headerList}>
                    <li className={navItem}><Link className={navLink} to='/'>Home</Link></li>
                    <li className={navItem}><Link className={navLink} to='/about'>About</Link></li>
                    <li className={navItem}><Link className={navLink} to='/achieve'>Achievement</Link></li>
                    <li className={navItem}><Link className={navLink} to='/products'>Products</Link></li>
                </ul>
            </header>
            <main className={mainContent}>
                {children}
            </main>

            <footer className={footer}>
                &copy; Luke 2022
            </footer>

        </div>
    )
}

export default Layer