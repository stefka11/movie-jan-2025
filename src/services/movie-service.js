import movies from "../movies.js";

export default {
    findOne(movieId){
        //TODO: ако няма филм ??
        const result = movies.find(movie => movie.id === movieId);
        return result;
    }

}