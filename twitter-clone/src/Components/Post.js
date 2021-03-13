import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

const Post = () => {
    return  <div className="feed__post">
                <div className="feed__postimage"></div>
                <div className="feed__postdata">
                    <div className="feed__posttitle">
                        <span className="feed_username">Ramsey</span>
                        <span className="feed_certificate"><FontAwesomeIcon icon={faCertificate} /></span>
                        <span className="feed_twitterhandle">@Ramseyu90wr0fw2h</span>
                        <span className="feed_time">3h</span>
                        <span className="feed_more">...</span>
                    </div>
                    <div className="feed__postcopy">
                        id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna
                    </div>
                    <div className="feed__postmedia">
                        <img src="https://i.guim.co.uk/img/media/ac2077e647fdb7e60e14a83a40a69021f5394ce1/0_138_4100_2460/master/4100.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=a938e28f47e9e5474722b732f3372b9e" alt="" />
                    </div>
                    <div className="feed__postmetadata"></div>
                </div>
            </div>
}

export default Post;