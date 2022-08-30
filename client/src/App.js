import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import Landing from './pages/Landing'
import Header from './pages/Header'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function createMastText () {
  let addr = window.location.href.split("/")
  let url = addr[addr.length-1];
  console.log(url)
  // const url = "/"
  if ( url === '') {
    return {headerText: 'example head text', subHeaderText: 'example sub text'};
  } else if (url === 'profile') {
    return {headerText: 'different example text', subHeaderText: 'also different test'};
  } 
  // hard code in URLs and there respective headerText and subHeaderText
}

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <Header {...createMastText()} />
        <div className="flex-column justify-center align-center min-100-vh">
          <Routes>
            <Route 
              path="/" 
              element={<Profile />}
            />
          </Routes>
        
      </Router>
    </ApolloProvider>
  );

}

export default App;
