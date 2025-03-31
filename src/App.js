import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage/Mainpage"
import Categories from "./pages/Categories/Categories"
import NotFound from "./components/Page404"
import ItalianCategory from "./pages/Categories/ItalianCategory/ItalianCategory"
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction"
import AboutUs from './pages/AboutUs/AboutUs';
import LogIn from './pages/LogIn/LogIn';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import CreatePassword from './pages/CreatePassword/CreatePassword';
import ChangedPassword from './pages/ChangedPassword/ChangedPassword';

function App() {
  return (
    <div className="App">
      {<BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />}/>
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/italian" element={<ItalianCategory />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/map" element={<UnderConstruction />} />
          <Route path="/profile" element={<ProfilePage/> } />
          <Route path="/about" element={<AboutUs/> } />
          <Route path="/categories/*" element={<UnderConstruction />} />
          <Route path="/settings/*" element={<UnderConstruction />} />
          <Route path="/reset_password/*" element={<ResetPassword />} />
          <Route path="/create_password/*" element={<CreatePassword />} />
          <Route path="/changed_password/*" element={<ChangedPassword />} />


          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> }

      
    </div>
  );
}

export default App;