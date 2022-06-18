import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

const ExerciseVideo = ({ exerciseVideos, name }) => {
  return (
    <Box sx={{ mt: { lg: '50px', xs: '20px' } }} p='20px'>
      <Typography variant='h3' mb='33px'>
        Watch{' '}
        <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>
          {name}
        </span>{' '}
        exercise videos
      </Typography>
      <Stack
        justifyContent='flex-start'
        flexWrap='wrap'
        alignItems='center'
        sx={{ flexDirection: { lg: 'row' }, gap: { lg: '10px', xs: '0' } }}>
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            key={index}
            className='exercise-video'
            target='blank'
            rel='noreferrer'>
            <img alt={item.video.title} src={item.video.thumbnails[0].url} />
            <Box>
              <Typography variant='h5' color='#000'>
                {item.video.title}
              </Typography>
              <Typography variant='h6' color='#000'>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideo;
