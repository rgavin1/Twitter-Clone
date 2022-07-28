import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faChartBar, faSmile, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { postServices } from '../services/posts';

const TwitterTextarea: React.FC = () => {
    const [tweet, setTweet] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await postServices.createSinglePost(tweet);
    }
    const handleChange = (e: any) => {
        const { value } = e.currentTarget;
        if (!!value && value.length === 0) return;
        setTweet(value);
        return;
    }

    return <div className="feed__tweetbox">
        <div className="feed__profileimg"></div>
        <form id="tweetbox" onSubmit={handleSubmit}>
            <div className="feed__mediaoptions">
                <input className="tweetinput" placeholder="What's happening?" value={tweet} onChange={handleChange} />
                <ul>
                    <li title="Media"><FontAwesomeIcon icon={faImage} /></li>
                    <li title="GIF"><FontAwesomeIcon icon={faGift} /></li>
                    <li title="Polls"><FontAwesomeIcon icon={faChartBar} /></li>
                    <li title="Emoji"><FontAwesomeIcon icon={faSmile} /></li>
                    <li title="Schedule"><FontAwesomeIcon icon={faCalendarAlt} /></li>
                    <li id="tweet_button" style={{ marginLeft: "auto" }} title="Tweet"><input aria-disabled={!!(tweet.length === 0)} style={{ background: tweet ? "#1da1f2" : "#1da1f294" }} type="submit" value="Tweet" /></li>
                </ul>
            </div>
        </form>
    </div>;
}

export default TwitterTextarea;