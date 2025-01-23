import React from 'react';
import VideoCard from '../components/VideoCard';

const HomePage = () => {
    const videos = [
        { id: '1', title: 'Video 1', thumbnail: 'https://via.placeholder.com/400x200' },
        { id: '2', title: 'Video 2', thumbnail: 'https://via.placeholder.com/400x200' },
        { id: '3', title: 'Video 3', thumbnail: 'https://via.placeholder.com/400x200' },
        { id: '4', title: 'Video 4', thumbnail: 'https://via.placeholder.com/400x200' },
    ];

    return (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {videos.map(video => <VideoCard key={video.id} video={video} />)}
        </div>
    );
};

export default HomePage;
