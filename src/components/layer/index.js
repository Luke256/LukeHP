import React from 'react'
import { Link } from 'gatsby'
import { header, headerList, navItem, navLink, mainContent, footer, parent, SNSIcon } from './layer.module.css'
import TwitterIcon from '/content/assets/twitter.svg'
import GithubIcon from '/content/assets/github.svg'
import ZennIcon from '/content/assets/zenn.svg'

const Layer = ({PageTitle, children}) => {

    return (
        <div className={parent}>
            <title>{PageTitle} | Luke</title>
            <header className={header}>
                <Link to='/'><h1>Luke</h1></Link>
                <ul className={headerList}>
                    <li className={SNSIcon}><a aria-label="Twitter" href='https://twitter.com/luke02561' target="_blank" rel='noreferrer'><span><TwitterIcon className={SNSIcon}/></span></a></li>
                    <li className={SNSIcon}><a aria-label="GitHub" href='https://github.com/luke256' target="_blank" rel='noreferrer'><span><GithubIcon className={SNSIcon}/></span></a></li>
                    <li className={SNSIcon}><a aria-label="Zenn" href='https://zenn.dev/luke256' target="_blank" rel='noreferrer'><span><ZennIcon className={SNSIcon}/></span></a></li>
                </ul>
                <ul className={headerList}>
                    <li className={navItem}><Link className={navLink} to='/'>Home</Link></li>
                    <li className={navItem}><Link className={navLink} to='/about'>About</Link></li>
                    <li className={navItem}><Link className={navLink} to='/achieve'>Achievement</Link></li>
                    <li className={navItem}><Link className={navLink} to='/products'>Products</Link></li>
                    <li className={navItem}><Link className={navLink} to='/blogs'>Blogs</Link></li>
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