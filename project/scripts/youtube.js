// Your API key
const API_KEY = 'AIzaSyCPCmYaGRe25FL_nXFYSplkv9YY_ZDm-t4';
// Channel ID
const CHANNEL_ID = 'UCZop-p7Pn7ylJqhuJQw0Mhg';
// API endpoint to fetch videos
const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`;

// Fetch videos
fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        const videoContainer = document.getElementById('video-container');
        data.items.forEach(item => {
            const videoId = item.id.videoId;
            const videoTitle = item.snippet.title;
            const videoEmbed = document.createElement('div');
            videoEmbed.className = 'video-embed';
            videoEmbed.innerHTML = `
                <h3>${videoTitle}</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;
            videoContainer.appendChild(videoEmbed);
        });
    })
    .catch(error => console.error('Error fetching videos:', error));
