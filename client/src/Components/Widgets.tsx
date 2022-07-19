import React from 'react';
import '../Assets/styles/Widgets.css';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Widgets = () => {
    return <div className="widgets">
        <div className="widgets__stickytop">
            <form>
                <span className="widgets__inputcontainer">
                    <FontAwesomeIcon icon={faSearch} />
                    <input placeholder="Search Twitter" />
                </span>
            </form>
        </div>
        <div className="widgets__feedcontainer">
            <TwitterTweetEmbed tweetId={'1370797127459278856'} />
            <TwitterTweetEmbed tweetId={'1363875186215378946'} />
            <TwitterTweetEmbed tweetId={'1370630960237187075'} />
            <TwitterTweetEmbed tweetId={'1370777585295233027'} />
            <TwitterTweetEmbed tweetId={'1370861477289099266'} />
            <TwitterTweetEmbed tweetId={'933354946111705097'} />
            <TwitterTweetEmbed tweetId={'933354946111705097'} />
            <TwitterTweetEmbed tweetId={'933354946111705097'} />
            <TwitterTweetEmbed tweetId={'933354946111705097'} />
        </div>
    </div>
}

export default Widgets; 