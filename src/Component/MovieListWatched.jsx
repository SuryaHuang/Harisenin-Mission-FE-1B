import "../Css/Beranda.css";
import imgLandscape1 from "../images/Landscape/Type=1.png";
import imgLandscape2 from "../images/Landscape/Type=2.png";
import imgLandscape3 from "../images/Landscape/Type=3.png";
import imgLandscape4 from "../images/Landscape/Type=4.png";
import imgLandscape5 from "../images/Landscape/Type=5.png";
import imgLandscape6 from "../images/Landscape/Type=6.png";
import imgLandscape7 from "../images/Landscape/Type=7.png";
import imgLandscape8 from "../images/Landscape/Type=8.png";
import imgLandscape9 from "../images/Landscape/Type=9.png";
import { ListWatchedImg } from "./ContentText";

const MovieListWatched = () => {
  return (
    <>
      <ListWatchedImg imgLandscape={imgLandscape1} />
      <ListWatchedImg imgLandscape={imgLandscape2} />
      <ListWatchedImg imgLandscape={imgLandscape3} />
      <ListWatchedImg imgLandscape={imgLandscape4} />
      <ListWatchedImg imgLandscape={imgLandscape5} />
      <ListWatchedImg imgLandscape={imgLandscape6} />
      <ListWatchedImg imgLandscape={imgLandscape7} />
      <ListWatchedImg imgLandscape={imgLandscape8} />
      <ListWatchedImg imgLandscape={imgLandscape9} />
    </>
  );
};

export default MovieListWatched;
