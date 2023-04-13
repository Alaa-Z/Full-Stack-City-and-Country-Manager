import React from "react";
import CityList from "./components/CityList";
import AddCity from "./components/AddCity";

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// setup apollo client
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
        <AddCity />
      </div>
    </ApolloProvider>
  );
}

export default App;
