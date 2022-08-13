import { Route, Routes} from 'react-router-dom';
import './App.css';
import Landing from './components/landing/landing';
import Home from './components/home/home';
import Details from './components/details/details';
import CreateAct from './components/createAct/createAct'

function App() {
  return (
    <Routes>
       <Route exact path ="/" element ={<Landing/>}></Route>
       <Route exact path ="/home" element ={<Home/>}></Route>
       <Route exact path ="/home/countries/:id" element ={<Details/>}></Route>
       <Route exact path ="/Activity" element ={<CreateAct/>}></Route>

    
    </Routes>
   
  );
}

export default App;
