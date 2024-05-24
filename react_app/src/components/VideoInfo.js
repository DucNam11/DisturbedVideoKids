import React from 'react';

const VideoInfo = ({ videoData }) => {
  if (!videoData) {
    return <div>No video data</div>;
  }

  return (
    <div className="VideoInfo">
      <h2>Video Information</h2>
      <p><strong>Video ID:</strong> {videoData.videoId}</p>
      <p><strong>Title:</strong> {videoData.title}</p>
      <p><strong>Description:</strong> {videoData.description}</p>
      <div>
        <strong>Thumbnail:</strong><br />
        <img src={videoData.thumbnails} alt={videoData.title} />
      </div>
      <p><strong>View Count:</strong> {videoData.viewCount}</p>
      <p><strong>Like Count:</strong> {videoData.likeCount}</p>
      <p><strong>Dislike Count:</strong> {videoData.dislikeCount}</p>
      <p><strong>Tags:</strong> {videoData.videoTags.join(', ')}</p>
    </div>
  );
};

export default VideoInfo;
