import * as React from 'react'
import { content, heading } from './style.module.css'

const MarkedContent = ({Title, background, children}) => {
    return (
        <div style={{background:background}}>
            <div className={content}>
                <h2 className={heading}>{Title}</h2>
                {children}
            </div>
        </div>
    )
}

export default MarkedContent;