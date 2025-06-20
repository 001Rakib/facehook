import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Header from "../components/common/Header";
import ProfileProvider from "../providers/ProfileProvider";
import PostProvider from "../providers/PostProvider";

const PrivateRoutes = () => {
  const { auth } = useAuth();

  return (
    <>
      {auth.authToken ? (
        <main className="">
          <PostProvider>
            <ProfileProvider>
              <Header />
              <div className="container max-w-screen-xl mx-auto">
                <Outlet />
              </div>
            </ProfileProvider>
          </PostProvider>
        </main>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default PrivateRoutes;
