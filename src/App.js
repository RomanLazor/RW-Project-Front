import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage/Mainpage"
import Categories from "./pages/Categories/Categories"
import NotFound from "./components/Page404"
import ItalianCategory from "./pages/Categories/ItalianCategory/ItalianCategory"
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction"
import UkraineMap from './pages/Map/UkraineMap';
import AboutUs from './pages/AboutUs/AboutUs';
import LogIn from './pages/LogIn/LogIn';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import CreatePassword from './pages/CreatePassword/CreatePassword';
import ChangedPassword from './pages/ChangedPassword/ChangedPassword';
import RecipeView from './components/RecipeView/RecipeView';
import UserRecipe from './components/UserRecepie/UserRecepie';
import AddRecipeWithImage from './components/Recipe/Recipe';
import RandomImage from './components/Random/randomimage';
import {AuthProvider} from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import AmericanCategory from './pages/Categories/AmericanCategory/AmericanCategory';
import ChineseCategory from './pages/Categories/ChineseCategory/ChineseCategory';
import FrenchCategory from './pages/Categories/FrenchCategory/FrenchCategory';
import GreekCategory from './pages/Categories/GreekCategory/GreekCategory';
import JapaneseCategory from './pages/Categories/JapaneseCategory/JapaneseCategory';
import SpanishCategory from './pages/Categories/SpanishCategory/SpanishCategory';
import CreateNewPassword from './pages/CreateNewPassword/CreateNewPassword';
import MapTest from './pages/Map/MapTest';




function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Mainpage />}/>
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/italian" element={<ItalianCategory />} />
            <Route path="/categories/american" element={<AmericanCategory />} />
            <Route path="/categories/chinese" element={<ChineseCategory />} />
            <Route path="/categories/french" element={<FrenchCategory />} />
            <Route path="/categories/greek" element={<GreekCategory />} />
            <Route path="/categories/japanese" element={<JapaneseCategory />} />
            <Route path="/categories/spanish" element={<SpanishCategory />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/map" element={<UkraineMap />} />

            
           {/* <Route path="/map" element={
                <PrivateRoute>
                  <UkraineMap />
                </PrivateRoute>
              }
            />*/}
            <Route path="/profile" element=
              {
                <PrivateRoute>
                  <ProfilePage/>
                </PrivateRoute>
              }
            />
            <Route path="/about" element={<AboutUs/> } />
            <Route path="/categories/*" element={<UnderConstruction />} />
            <Route path="/settings/*" element={<UnderConstruction />} />
            <Route path="/reset_password/*" element={<ResetPassword />} />
            <Route path="/create_password/*" element={<CreatePassword />} />
            <Route path="/changed_password/*" element={<ChangedPassword />} />
            <Route path="/recipe" element={<RecipeView />} />
            <Route path="/recipe" element={<UserRecipe />} />
            <Route path="/addrecipe" element={<AddRecipeWithImage />} />
             <Route path="/create_new_password/*" element={<CreateNewPassword />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>

      
    </div>
  );
}

export default App;