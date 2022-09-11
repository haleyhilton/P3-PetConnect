export const createMastText = () => {
    let addr = window.location.href.split("/")
    let url = addr[addr.length-1];
    console.log(url)
    // const url = "/"
    if ( url === '') {
      return {headerText: 'Welcome to PetConnect', subHeaderText: 'We\'re so glad you\'re here'};
    } 
    else if ( url === 'about') {
      return {headerText: 'OUR STORY', subHeaderText: 'Founded in San Diego, California'};
    } 
    else if ( url === 'search') {
      return {headerText: 'Find your furever friend', subHeaderText: 'Get Searching'};
    } 
    else if ( url === 'faq') {
      return {headerText: 'FREQUENTLY ASKED QUESTIONS', subHeaderText: ''};
    } 
    else if (url === 'contact') {
      return {headerText: 'Contact Us', subHeaderText: 'Got a question? Need details about our business plan? Let us know below'};
    } 
    else if (url === 'team') {
      return {headerText: 'Meet the Team', subHeaderText: 'Something about us'};
    } 
    else if (url === 'login') {
      return {};
    } 
  }