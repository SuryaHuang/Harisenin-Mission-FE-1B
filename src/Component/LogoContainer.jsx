import "../Css/Beranda.css";
import MenuContainer from "../Component/MenuContainer";
import ProfileContainer from "./ProfileContainer";

const LogoContainer = () => {
  return (
    <>
      <div className="logo-container">
        <picture>
          <source
            media="(max-width: 480px)"
            srcSet="../src/images/Logo/Logo-small.png"
            alt="small-logo"
          ></source>
          <img className="logo" src="../src/images/Logo/Logo2.png" alt="logo" />
        </picture>
        <MenuContainer />
        <ProfileContainer />
      </div>
    </>
  );
};

export default LogoContainer;
