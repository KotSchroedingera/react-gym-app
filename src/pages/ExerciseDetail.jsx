import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../components/Detail';
import ExerciseVideo from '../components/ExerciseVideo';
import SimilarExercises from '../components/SimilarExercises';
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDetailData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchData(
        `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideoData.contents);
    };

    fetchExerciseData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
