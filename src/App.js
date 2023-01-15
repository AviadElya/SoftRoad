// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './pags/Layout';
import Practis from './pags/Practis';
import Theory from './pags/Theory';
import Weely from './pags/Weekly/index'
import Personal from './pags/PersonalAchievements/index'
import LearnMateryal from './pags/LearnMateryal/index'

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={ <Layout />}/>
        <Route path='/practic' element={<Practis />} />
        <Route path='/personal' element={<Personal/>} />
        <Route path='/theory' element={<Theory />} />
        <Route path='/weekly' element={<Weely />} />
        <Route path='/learn' element={<LearnMateryal />} />
        <Route path='/*' element={ <Layout />}/>
      </Routes>
    </div>
  );
}

export default App;
