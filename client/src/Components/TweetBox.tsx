import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faChartBar, faSmile, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';

const TweetBox = () => {
    const [tweet, setTweet] = useState('');

    function handleSubmit(e: any) {
        e.preventDefault();
    }
    function handleChange(e: any) {
        setTweet(e.currentTarget.value);
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
                </ul>
            </div>
            <input type="submit" value="Tweet" />
        </form>
    </div>;
}

export default TweetBox;