import LwsLogo from "../../assets/images/logo.svg";
import HomeIcon from "../../assets/icons/home.svg";
import NotificationIcon from "../../assets/icons/notification.svg";
import { Link } from "react-router-dom";
import Logout from "../auth/Logout";
import { useAuth } from "../../hooks/useAuth";
import useProfile from "../../hooks/useProfile";

const Header = () => {
  const { auth } = useAuth();
  const { state } = useProfile();

  const user = state?.user ?? auth?.user;

  return (
    <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4 ">
      <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link to={"/"}>
          <img
            className="max-w-[100px] rounded-full lg:max-w-[130px]"
            src={LwsLogo}
          />
        </Link>
        {/* nav links  */}
        <div className="flex items-center space-x-4">
          <Link to={"/"} className="btn-primary flex items-center">
            <img src={HomeIcon} alt="Home" />
            Home
          </Link>
          <button className="icon-btn">
            <img src={NotificationIcon} alt="Notification" />
          </button>
          <Logout />

          <Link to={"/me"} className="flex-center !ml-8 gap-3">
            <span className="text-lg font-medium lg:text-xl">
              {" "}
              {user?.firstName}
              {user?.lastName}
            </span>
            <img
              className="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px] rounded-full"
              src={`${import.meta.env.VITE_SERVER_BASE_URL}/${user.avatar}`}
              alt="Profile_Image"
            />
          </Link>
        </div>
        {/* nav links ends */}
      </div>
    </nav>
  );
};

export default Header;
