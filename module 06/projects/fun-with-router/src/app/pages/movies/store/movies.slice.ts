import { Movie } from "../../../models/movie.model";

export interface MoviesSlice {
    readonly busy: boolean;
    readonly movies: Movie[];
}

export const initialMoviesSlice: MoviesSlice = {
    busy: false,
    movies: []
};