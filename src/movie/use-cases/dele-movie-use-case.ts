import { Repository } from 'typeorm';
import { Movie } from '../entities/movie.entity';
import { FindOneMovieUseCase } from './find-one-movie-use-case';
import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

export const deleteMovieUseCase = async (
  id: string,
  movieRepository: Repository<Movie>,
) => {
  const movie = await FindOneMovieUseCase(id, movieRepository);

  if (!movie) {
    throw new NotFoundException(`movie with id ${id} not found`);
  }

  try {
    movie.isActive = true;
    await movieRepository.save(movie);
    return movie;
  } catch {
    throw new InternalServerErrorException('Error deleting movie');
  }
};

// export const deleteMoviePermanentlyUseCase = (id: string) => { };
