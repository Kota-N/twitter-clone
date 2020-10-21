import React from 'react';
import '../css/TweetBox.css';
import {Avatar, Button} from "@material-ui/core";

const TweetBox = () => {
    return ( <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
                <Avatar src="https://image.shutterstock.com/image-photo/soccer-ball-on-isolated-260nw-535561051.jpg" />
                <input placeholder="What's happening?" type="text"/>
            </div>
            <input className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text"/>
            <Button className="tweetBox__tweetButton">Tweet</Button>
        </form>
    </div> );
}
 
export default TweetBox;