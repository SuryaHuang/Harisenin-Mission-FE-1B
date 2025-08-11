import "../Css/Beranda.css";
import MenuContainer from "../Component/MenuContainer";
import ProfileContainer from "./ProfileContainer";
import Logo from "../images/Logo/Logo.png";
import LogoSmall from "../images/Logo/Logo-small.png";

const LogoContainer = () => {
  return (
    <>
      <div className="logo-container">
        <picture>
          <source
            media="(max-width: 480px)"
            srcSet={LogoSmall}
            alt="small-logo"
          ></source>
          <img className="logo" src={Logo} alt="logo" />
        </picture>
        <MenuContainer />
        <ProfileContainer />
      </div>
    </>
  );
};

export default LogoContainer;
