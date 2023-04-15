import React from "react";
import CityList from "./components/CityList";
import AddCity from "./components/AddCity";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import AddCountry from "./components/AddCountry";

// setup apollo client
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>List</h1>
        <CityList />
        <AddCity />
        <AddCountry/>
      </div>
    </ApolloProvider>
  );
}

export default App;
