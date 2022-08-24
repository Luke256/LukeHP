import * as React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { jumplink } from "./jumplink.module.css"

const JumpLink = ({Href, children}) => {
    return (
        <div>
            <a href={Href} target="_blank" rel="noreferrer">
                <FontAwesomeIcon className={jumplink} icon={faUpRightFromSquare} />{children}
            </a>
        </div>
    )
}

export default JumpLink