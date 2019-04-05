import React from "react";
import { Link } from "react-router-dom";
import { HOME_PAGE } from "./queries";
import { Query } from "react-apollo";

const Home = () => (
  <Query query={HOME_PAGE}>
    {({ loading, error, data }) => {
      console.log(loading, error, data);
      if (loading) return <span>loading...</span>;
      if (error) return <span>some error</span>;

      return data.movies.map(movie => (
        <Link to={`/details/${movie.id}`}>
          <h2 key={movie.id}>
            {movie.title} / {movie.rating}
          </h2>
        </Link>
      ));
    }}
  </Query>
);

export default Home;
