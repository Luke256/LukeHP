import React from 'react'
import { ButtonBody } from './linkbutton.module.css'
import { Link } from 'gatsby'

const LinkButton = ({ to, children }) => {
    return (
        <Link to={to} class={ButtonBody}>{children}</Link>
    )
}

export default LinkButton