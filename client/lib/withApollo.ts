import ApolloClient, { InMemoryCache } from "apollo-boost";
import withApollo from "next-with-apollo";

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: "http://localhost:4000",
      cache: new InMemoryCache().restore(initialState || {}),
    })
);
