import * as React from 'react'
import { header, detail, content } from './content.module.css'

const Content = ({Title, children}) => {
    return (
        <div className={content}>
            <h2 className={header}>{Title}</h2>
            <div className={detail}>
                {children}
            </div>
        </div>
    );
};

export default Content