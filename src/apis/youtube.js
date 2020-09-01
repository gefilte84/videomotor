// Youtube API
import axios from 'axios';

const KEY = 'AIzaSyC16_shHlPOZk4YJ5_qS6l7S1hwP35kafw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});


