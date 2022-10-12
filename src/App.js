import { Routes, Route, Outlet } from 'react-router-dom'
import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/authentication/authentication.component';


const Shop = () => {
  return (
      <div>
          <div>
              <h1>NShoppavbar</h1>
          </div>
          <Outlet />
      </div>
  );
}
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home />}/>
        <Route path="shop" element={<Shop />}/>
        <Route path="auth" element={<SignIn/>}/>
      </Route>
    </Routes>
  );
}

export default App;
