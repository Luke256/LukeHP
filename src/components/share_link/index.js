import React from 'react'
import { Facebook, Twitter } from 'react-sharingbuttons';
import 'react-sharingbuttons/dist/main.css';
import './share_link.module.css';

const ShareLink = ({title, url}) => {

    return (
        <div>
            <Facebook url={url}/>
            <Twitter url={url} shareText={`${title}`} />
        </div>
    );
};

export default ShareLink;