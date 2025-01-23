import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
    return (
        <Link to={`/video/${video.id}`} className="group block">
            <div className="relative">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover rounded-md" />
                <div className="absolute bottom-2 left-2 text-white">{video.title}</div>
            </div>
        </Link>
    );
};

export default VideoCard;
