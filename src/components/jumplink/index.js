import * as React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { jumplink } from "./jumplink.module.css"

const JumpLink = ({Href, children}) => {
    return (
        <div>
            <Link href={Href} target="_blank">
                <FontAwesomeIcon className={jumplink} icon={faUpRightFromSquare} />{children}
            </Link>
        </div>
    )
}

export default JumpLink