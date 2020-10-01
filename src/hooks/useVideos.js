import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';


// dette er en custom hooks
const useVideos = (defaultSearchTerm) => {
    // denne useState hånterer en liste med vidoer
    const [videos, setVideos] = useState([]);

    // gjør at det er noe default på siden
    // denne useEffect handler om å hente en liste med videor
    // 
    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

        // søke funksjonen og forespørsel
    // mot youtube api
    const search = async term => {
        const response = await youtube.get('/search', {
             params: {
                 q: term
             }
         });
         // resultat av søket
         setVideos(response.data.items);
         
     };

     return [videos, search];

};

export default useVideos;