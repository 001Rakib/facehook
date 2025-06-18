import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../assets/useAuth";
import Header from "../components/common/Header";

const PrivateRoutes = () => {
  const { auth } = useAuth();

  return (
    <>
      {auth.user ? (
        <main className="">
          <div className="container ">
            <Header />
            <Outlet />
          </div>
        </main>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default PrivateRoutes;
