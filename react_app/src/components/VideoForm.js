import React, { useState } from 'react';
import axios from 'axios';

const VideoForm = ({ onResult }) => {
  const [videoLink, setVideoLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/video', { videoLink });
      onResult(response.data);
    } catch (error) {
      console.error('Error submitting video link:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={videoLink}
        onChange={(e) => setVideoLink(e.target.value)}
        placeholder="Nhập link video YouTube"
      />
      <button type="submit">Kiểm tra</button>
    </form>
  );
};

export default VideoForm;
