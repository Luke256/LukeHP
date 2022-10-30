import * as React from 'react'
import { jumplink } from "./jumplink.module.css"
import { BsBoxArrowUpRight } from "react-icons/bs";

const JumpLink = ({Href, children}) => {
    return (
        <div>
            <a href={Href} target="_blank" rel="noreferrer">
                <BsBoxArrowUpRight className={jumplink} />{children}
            </a>
        </div>
    )
}

export default JumpLink