import gql from "graphql-tag";

const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 7) {
      id
      title
      rating
    }
  }
`;

const DETAIL_PAGE = gql`
  query getMovieDetail($movieId: Int!) {
    movie(movieId: $movieId) {
      title
      rating
      description_full
    }
    suggestion(movieId: $movieId) {
      id
      title
      rating
      description_full
    }
  }
`;
export { HOME_PAGE, DETAIL_PAGE };
