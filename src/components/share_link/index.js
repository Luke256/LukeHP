import React from 'react'
import {shareLinkButton} from './share_link.module.css';
import { 
    FacebookShareButton, FacebookIcon, 
    TwitterIcon, TwitterShareButton,
    LinkedinShareButton, LinkedinIcon,
    HatenaShareButton, HatenaIcon
} from 'react-share';

const ButtonSize = 32;

const ShareLink = ({title, url}) => {

    return (
        <div>
            <FacebookShareButton url={url} className={shareLinkButton}>
                <FacebookIcon size={ButtonSize} round/>
            </FacebookShareButton>
            <TwitterShareButton url={url} title={`${title}\n`} className={shareLinkButton}>
                <TwitterIcon size={ButtonSize} round/>
            </TwitterShareButton>
            <LinkedinShareButton url={url} title={title} className={shareLinkButton}>
                <LinkedinIcon size={ButtonSize} round/>
            </LinkedinShareButton>
            <HatenaShareButton url={url} title={title} className={shareLinkButton}>
                <HatenaIcon size={ButtonSize} round/>
            </HatenaShareButton>
        </div>
    );
};

export default ShareLink;