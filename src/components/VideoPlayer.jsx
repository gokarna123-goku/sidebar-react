import React from 'react';

const VideoPlayer = ({ match }) => {
    const videoId = match.params.id;
    return (
        <div className="flex flex-col items-center py-6">
            <div className="w-full max-w-3xl">
                <iframe
                    width="100%"
                    height="400"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="text-white mt-4">Video Title</div>
            <div className="text-gray-500">Video description here...</div>
        </div>
    );
};

export default VideoPlayer;
