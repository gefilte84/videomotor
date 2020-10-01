import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

//Lagt til hooks isteden for class based components
// implementere custom hooks for å bruke logikk i to forskjellige
// komponenter
// når du har data fetching så bruk custom hooks
const App = () => {
    
    // denne useState håndterer nåværende valgt video
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('destiny 2');
    
    // Hver gang vi søker ny video så kjører denne 
    // så setter vi ny liste med setSelectedvideo
    useEffect(() => {
        setSelectedVideo(videos[0]);

    }, [videos])
   



    return (
        // vi henter grid system fra semantic UI
        // container gjør at searchbar ikke strekker over hele siden (margin på sidene)
    <div className="ui container">
        <SearchBar onFormSubmit={search} />
        <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
                <VideoDetail video={selectedVideo}/>
                </div>
                <div className="five wide column">
                <VideoList
                onVideoSelect={setSelectedVideo} 
                videos={videos} 
                />
                </div>
                
            </div>
         </div>
    </div>
    );
};

export default App;

