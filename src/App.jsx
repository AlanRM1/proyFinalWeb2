import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Microsoft from './pages/Microsoft';
import Adobe from './pages/Adobe';
import Google from './pages/Google';
import Meta from './pages/Meta';
import Other from './pages/Other';
import MsHome from './pages/subpages/MsHome';
import Windows from './pages/subpages/Windows';
import Office from './pages/subpages/Office365';
import Xbox from './pages/subpages/Xbox';
import Azure from './pages/subpages/Azure';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div>
      <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='microsoft' element={<Microsoft/>}>
            <Route path='home' element={<MsHome/>}/>
            <Route path='windows' element={<Windows/>}/>
            <Route path='office' element={<Office/>}/>
            <Route path='xbox' element={<Xbox/>}/>
            <Route path='azure' element={<Azure/>}/>
          </Route>
          <Route path='adobe' element={<Adobe/>}/>
          <Route path='google' element={<Google/>}/>
          <Route path='meta' element={<Meta/>}/>
          <Route path='*' element={<Other/>}/>
        </Route>
      </Routes>
    </div>
    </div>
  )
}

export default App
