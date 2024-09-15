import '../src/App.css';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Body_1 from './components/body/body_1/body_1';
import Body_2 from './components/body/body_2/body_2';
import Body_3 from './components/body/body_3/body_3';
import Body_4 from './components/body/body_4/body_4';
import Body_5 from './components/body/body_5/body_5';
import Stake from './components/stake/stake';

const App = () => {
  // Lấy địa chỉ hiện tại
  const location = useLocation();
  const isStakePage = location.pathname === '/stake';

  return (
    <>
      <Header />
      <div className='bg-custom-bgr'>
        {!isStakePage && (
          <>
            <Body_1 />
            <Body_2 />
            <Body_3 />
            <Body_4 />
            <Body_5 />
          </>
        )}

        <Routes>
          <Route path="/" element={<div />} />
          <Route path="/stake" element={<Stake />} />
        </Routes>
        <Outlet />
      </div>
      <Footer />
    </>
  ); 
};

export default App;
