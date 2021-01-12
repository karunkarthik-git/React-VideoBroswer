import axios from 'axios';

const KEY = 'AIzaSyCPh2DbhYEC00Xs8ubJfRVWH3KKFXAqGS0';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults:5,
        key: KEY
    }
});

