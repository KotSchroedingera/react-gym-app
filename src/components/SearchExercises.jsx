import { Button, Stack, TextField, Typography, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyParts = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );
      setBodyParts(['all', ...bodyPartsData]);
      console.log(bodyParts);
    };
    fetchBodyParts();
  }, []);

  const handleSearch = async (evt) => {
    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (elem) =>
          elem.name.toLowerCase().includes(search) ||
          elem.target.toLowerCase().includes(search) ||
          elem.equipment.toLowerCase().includes(search) ||
          elem.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems='center' justifyContent='center' mt='37px' p='20px'>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb='50px'
        textAlign='center'>
        Awesome exercises you <br /> should know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          height='76px'
          value={search}
          onChange={(evt) => setSearch(evt.target.value.toLowerCase())}
          placeholder='Search Exercises'
          type='text'
          sx={{
            input: { fontWeight: 700, border: 'none', borderRadius: '4px' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
        />
        <Button
          className='search-btn'
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: {
              lg: '175px',
              xs: '80px',
            },
            fontSize: {
              lg: '16px',
              xs: '12px',
            },
            height: '56px',
            position: 'absolute',
            right: '0',
          }}
          onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
