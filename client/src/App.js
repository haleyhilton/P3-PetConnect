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

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <Header />
        <div className="flex-column justify-center align-center min-100-vh">
          <Routes>
            <Route 
              path="/" 
              element={<Landing />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );

}

export default App;
