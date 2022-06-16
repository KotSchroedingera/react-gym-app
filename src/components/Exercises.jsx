import { Box, Pagination, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const inddexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    inddexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (evt, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  return (
    <Box id='exercises' sx={{ mt: { lg: '110px' } }} mt='50px' p='20px'>
      <Typography variant='h3' mb='46px'>
        Showing results
      </Typography>
      <Stack
        direction='row'
        sx={{ gap: { lg: '110px', xs: '50px' } }}
        flexWrap='wrap'
        justifyContent='center'>
        {currentExercises.map((elem, i) => (
          <ExerciseCard key={i} exercise={elem} />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > exercisesPerPage && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'></Pagination>
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
