import React, { useEffect, useState } from 'react';
import '../css/Feed.css'
import Post from './Post';
import TweetBox from './TweetBox';
import db from '../firebase';
import FlipMove from 'react-flip-move';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [postIds, setPostIds] = useState([])

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => doc.data()))
            setPostIds(snapshot.docs.map(doc => doc.id))
        })
    }, [])

    return ( <div className="feed">
        <div className="feed__header">
        <h2>Home</h2>
        </div>
        
        <TweetBox />

        <FlipMove>
        {posts.map((post, i) => (
            <Post
            key={postIds[i]}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            />
        ))}
        </FlipMove>
       
    </div> );
}
 
export default Feed;