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

export { HOME_PAGE };
