import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import { useAuth } from "Context";
import Alert from "components/ErrorMessage/Alert";
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const SignIn = React.lazy(() => import("pages/SignIn"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const ProjectRoutes = () => {

  const {user} = useAuth();

  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
      <div>
      <Routes>
          <Route path="/" element={user ? <Dashboard/> : <SignIn/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
        <Alert/>
      </div>
        
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
