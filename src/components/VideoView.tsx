import { Box } from '@mui/material';
import React from 'react';
import styles from '../assets/styles/VideoView.module.css';
import VirobusterVideo from '../assets/videos/virobuster-video.mp4';

const VideoView: React.FC<{}> = ({}) => {
  return (
    <Box className={styles.videoContainer}>
      <video controls src={VirobusterVideo} />
    </Box>
  );
};

export default VideoView;
