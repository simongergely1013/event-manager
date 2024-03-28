import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://backend.bixindex.hu",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;