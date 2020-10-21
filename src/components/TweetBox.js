import React, {useState} from 'react';
import '../css/TweetBox.css';
import { Avatar, Button } from "@material-ui/core";
import db from '../firebase'

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault()
        db.collection('posts').add({
            displayName: 'test name',
            username: 'test username',
            verified: true,
            text: tweetMessage,
            image: tweetMessage,
            avatar: 'https://image.shutterstock.com/image-photo/soccer-ball-on-isolated-260nw-535561051.jpg'
        });
        setTweetMessage('');
        setTweetImage('');
    }

    return (
    <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
                <Avatar src="https://image.shutterstock.com/image-photo/soccer-ball-on-isolated-260nw-535561051.jpg" />
                <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type="text"/>
            </div>
            <input onChange={e => setTweetImage(e.target.value)} value={tweetImage} className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text"/>
            <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
        </form>
    </div> );
}
 
export default TweetBox;