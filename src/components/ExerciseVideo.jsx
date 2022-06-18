import React from 'react';
import { Box, Typography } from '@mui/material';

const ExerciseVideo = ({ exerciseVideos, name }) => {
  console.log(exerciseVideos);
  return (
    <Box sx={{ mt: { lg: '50px', xs: '20px' } }} p='20px'>
      <Typography variant='h3' mb='33px'>
        Watch{' '}
        <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>
          {name}
        </span>{' '}
        exercise videos
      </Typography>
      <Stack>
        <a>
          <img />
        </a>
      </Stack>
    </Box>
  );
};

export default ExerciseVideo;
