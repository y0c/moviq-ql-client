import React from "react";
import { Query } from "react-apollo";
import { withRouter } from "react-router-dom";
import { DETAIL_PAGE } from "./queries";

const Movie = ({ data }) => (
  <div>
    <h2>{data.title}</h2>
    <h4>{data.rating}</h4>
    <pre>{data.description_full}</pre>
  </div>
);

const Detail = ({
  match: {
    params: { movieId }
  }
}) => {
  console.log(movieId);
  return (
    <Query query={DETAIL_PAGE} variables={{ movieId: parseInt(movieId) }}>
      {({ loading, error, data }) => {
        const { movie, suggestion } = data;
        if (loading) return <span>loading...</span>;
        if (error) return <span>error...</span>;
        return (
          <React.Fragment>
            <div>
              <Movie data={movie} />
            </div>
            <div>
              <h1>suggestion</h1>
              {suggestion.map(movie => (
                <Movie data={movie} key={movie.movieId} />
              ))}
            </div>
          </React.Fragment>
        );
      }}
    </Query>
  );
};

export default withRouter(Detail);
