import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { AreaChart, Area, XAxis, YAxis, Tooltip, Legend } from 'recharts';

function ChartWithTabs() {
    const [likesData, setLikesData] = useState([]);
    const [followersData, setFollowersData] = useState([]);
    const [activeTab, setActiveTab] = useState('likes');

    useEffect(() => {
        async function fetchData() {
            try {
                const likesResponse = await fetch('http://localhost:5000/likes-data');
                const followersResponse = await fetch('http://localhost:5000/follower-data');
                if (!likesResponse.ok || !followersResponse.ok) {
                    throw new Error('HTTP error');
                }
                const likesJson = await likesResponse.json();
                const followersJson = await followersResponse.json();
                setLikesData(likesJson.map(item => ({
                    time: item.date,
                    Likes: item.total_likes
                })));
                setFollowersData(followersJson.map(item => ({
                    time: item.date,
                    Followers: item.total_follower
                })));
            } catch (error) {
                console.error("Fehler beim Abrufen der Daten:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
            <Tab eventKey="likes" title="Likes">
                <AreaChart width={750} height={400} data={likesData}
                           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorLikes" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="time"/>
                    <YAxis/>
                    <Tooltip/>
                    <Area type="monotone" dataKey="Likes" stroke="#8884d8" fillOpacity={1} fill="url(#colorLikes)"/>
                </AreaChart>
            </Tab>
            <Tab eventKey="followers" title="Followers">
                <AreaChart width={750} height={400} data={followersData}
                           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="time"/>
                    <YAxis/>
                    <Tooltip/>
                    <Area type="monotone" dataKey="Followers" stroke="#82ca9d" fillOpacity={1} fill="url(#colorFollowers)"/>
                </AreaChart>
            </Tab>
        </Tabs>
    );
}

export default ChartWithTabs;
