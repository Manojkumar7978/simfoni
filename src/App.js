import logo from './logo.svg';
import './App.css';
import Router from './components/router';
import Nav from './components/nav';
import { Box } from '@chakra-ui/react';
import Filtersection from './components/filter.section';

function App() {
  return (
    <Box maxW={'1540px'} m={'auto'} className="App">

      {/* navbar component */}
      <Nav/>
     {/* all router  */}
     <Filtersection/>
      <Router/>
    </Box>
  );
}

export default App;
