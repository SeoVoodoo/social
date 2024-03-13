import React from 'react';
import s from './Profile.module.css';
import { MyPosts } from './MyPosts/MyPosts';

export const Profile = () => {
    return (
        <div>
            <div>
                <img width="1000" src = "https://wallpapers.com/images/hd/dual-monitor-background-eycrdqoprfo59obs.jpg" alt="" />
            </div>
            <div>
                ava + desc
                <img src="https://sun9-33.userapi.com/c854528/v854528061/20a930/mdBGplDIEzk.jpg?ava=1" alt="" />
            </div>
            <MyPosts />            
        </div>
    );
};

