import React from "react";
import CityList from "./components/CityList";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// setup appolo client
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>List</h1>
        <CityList />
      </div>
    </ApolloProvider>
  );
}

export default App;
