import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Header from "../components/common/Header";
import ProfileProvider from "../providers/ProfileProvider";

const PrivateRoutes = () => {
  const { auth } = useAuth();

  return (
    <>
      {auth.authToken ? (
        <main className="">
          <ProfileProvider>
            <Header />
            <div className="container max-w-screen-xl mx-auto">
              <Outlet />
            </div>
          </ProfileProvider>
        </main>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default PrivateRoutes;
