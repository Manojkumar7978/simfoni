import logo from './logo.svg';
import './App.css';
import Router from './components/router';
import Nav from './components/nav';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box maxW={'1540px'} m={'auto'} className="App">

      {/* navbar component */}
      <Nav/>
     {/* all router  */}
      <Router/>
    </Box>
  );
}

export default App;
