import { Movie } from "../../../../models/movie.model";

export interface MovieDetails {
    readonly busy: boolean;
    readonly movie: Movie | null;
}

export const initialMovieDetails: MovieDetails = {
    busy: false,
    movie: null
};