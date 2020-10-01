import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

//Lagt til hooks

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    // gjør at det er noe default på siden
    useEffect(() => {
        onTermSubmit('destiny 2')
    }, []);

    // søke funksjonen
    const onTermSubmit = async term => {
        const response = await youtube.get('/search', {
             params: {
                 q: term
             }
         });
         // resultat av søket
         setVideos(response.data.items);
         setSelectedVideo(response.data.items[0])
         
     };
         // callback arrow funksjon
    // dette må igjen refereres som props i render funksjonen
    const onVideoSelect = video => {
        setSelectedVideo(video);
    };
    return (
        // vi henter grid system fra semantic UI
        // container gjør at searchbar ikke strekker over hele siden (margin på sidene)
    <div className="ui container">
        <SearchBar onFormSubmit={onTermSubmit} />
        <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
                <VideoDetail video={selectedVideo}/>
                </div>
                <div className="five wide column">
                <VideoList
                onVideoSelect={onVideoSelect} 
                videos={videos} 
                /></div>
                
            </div>
         </div>
    </div>
    );
};

export default App;

