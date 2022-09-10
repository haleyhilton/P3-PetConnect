import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Header from './pages/Topbottom/Header'
import Footer from './pages/Topbottom/Footer'
import Profile from './pages/Profile/Profile'
import Login from './pages/Login/Login'
import Gallery from './pages/Gallery'
import Signup from './pages/Signup/Signup'
import About from './pages/FAQ/About'
import Contact from './pages/FAQ/Contact'
import FAQ from './pages/FAQ/FAQ'
import Team from './pages/FAQ/Team'
import Blog from './pages/FAQ/Blog'
import Landing from './pages/Landing/Landing'
import Search from './pages/Search/Search'
import { setContext } from '@apollo/client/link/context';
import Message from './pages/Messages/Message';
import Chat from './pages/Chat/chat';
import Social from './pages/Social/social';
import Loader from './pages/Loader/Loader';


// NEW NEW NEW
// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});



const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// NEWEND NEWEND NEWEND




// Original Client variable
// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

function createMastText () {
  let addr = window.location.href.split("/")
  let url = addr[addr.length-1];
  console.log(url)
  // const url = "/"
  if ( url === '') {
    return {headerText: 'Welcome to PetConnect', subHeaderText: 'Arf you glad you\'re here?'};
  } 
  else if ( url === 'about') {
    return {headerText: 'OUR STORY', subHeaderText: 'Founded in San Diego, California'};
  } 
  else if ( url === 'contact') {
    return {headerText: 'example head text', subHeaderText: 'example sub text'};
  } 
  else if ( url === 'faq') {
    return {headerText: 'FREQUENTLY ASKED QUESTIONS', subHeaderText: ''};
  } 
  else if (url === 'profile') {
    return {headerText: 'different example text', subHeaderText: 'also different test'};
  } 
  else if (url === 'team') {
    return {headerText: 'Meet the Team', subHeaderText: 'Something about us'};
  } 
  // hard code in URLs and there respective headerText and subHeaderText
}

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
      <Header {...createMastText()} />
          <Routes>
            <Route 
              path="/" 
              element={<Landing />}
            />
            <Route 
              path="/profiles/:profileId"
              element={<Profile />}
            />
            <Route 
              path="/messages/:userId" 
              element={<Message />}
            />
            <Route 
              path="/chat" 
              element={<Chat />}
            />
            <Route 
              path="/login" 
              element={<Login />}
            />
            <Route 
              path="/signup" 
              element={<Signup />}
            />
            <Route 
              path="/about" 
              element={<About />}
            />
            <Route 
              path="/contact" 
              element={<Contact />}
            />
            <Route 
              path="/faq" 
              element={<FAQ />}
            />
            <Route 
              path="/team" 
              element={<Team />}
            />
             <Route 
              path="/gallery/:profileId" 
              element={<Gallery />}
            />
            <Route 
              path="/blog" 
              element={<Blog />}
            />
            <Route 
              path="/search" 
              element={<Search />}

            />
            <Route 
              path="/social" 
              element={<Social />}
            />
          </Routes>
      <Footer />
      </Router>
    </ApolloProvider>
  );

}

export default App;
