import React, { Component} from 'react';
import { FacebookProvider, ShareButton, Comments } from 'react-facebook';

export default class ShareFB extends Component {
    render() {
        return (
            <FacebookProvider appId="434258054098528">
                <Comments href="http://www.facebook.com" />
                <ShareButton className="btn btn-primary mb-3" href="http://www.facebook.com">
                    <i className="fab fa-facebook-f mr-3"></i>
                    Share
                </ShareButton>
            </FacebookProvider>
        );
    }
}