import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import Landing from './pages/Landing'
import Profile from './pages/Profile'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        
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
