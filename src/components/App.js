import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    // initierer state
    state = { videos: [], selectedVideo: null };
    
    // gjør at det er noe default på siden
    componentDidMount() {
        this.onTermSubmit('destiny 2')
    }
    
    
    // søke funksjonen
    onTermSubmit = async term => {
       const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        // resultat av søket
        this.setState ({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };
    
    // callback arrow funksjon
    // dette må igjen refereres som props i render funksjonen
    onVideoSelect = video => {
        this.setState({ selectedVideo: video })
    };

    render() {
        return (
            // vi henter grid system fra semantic UI
            // container gjør at searchbar ikke strekker over hele siden (margin på sidene)
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                    <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="five wide column">
                    <VideoList
                    onVideoSelect={this.onVideoSelect} 
                    videos={this.state.videos} 
                    /></div>
                    
                </div>
             </div>
        </div>
        );
    }
}

export default App;

