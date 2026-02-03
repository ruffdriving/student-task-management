import AuthGuard from "./auth/AuthGuard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/dashboard";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

const defaultRoute =() =>{
  const authData =JSON.parse(localStorage.getItem('loginData'));
  if(authData){
    return<Navigate to="/Dashboard" replace/>
}
return <Navigate to="/Login" replace/>
}
function App() {
  const route = createBrowserRouter([     
    {
      path: "/",         
      element: <Register/>
    },
    {
      path: "/Login",
      element: 
      (<AuthGuard required={false}> <Login /> </AuthGuard>),
    },
    {
      path: "/Register",
      element: (<AuthGuard required={true}> <Register /> </AuthGuard>),
    },
        {
      path: "/Dashboard",
      element: (<AuthGuard required={true}> <Dashboard /> </AuthGuard>),
    }
  ]);

  return <RouterProvider router={route} />;
}

export default App;
