import "../Css/Beranda.css";

export const featuredDesc = {
  paragraph: (
    <>
      <p className="featured-description">
        David Martinez adalah seorang anak muda yang tinggal di daerah kumuh
        Night City. Setelah mengalami tragedi yang membuatnya kehilangan ibunya,
        ia memutuskan untuk menjadi seorang Edgerunner, seorang bajingan jalanan
        yang bekerja untuk menyelesaikan pekerjaan berbahaya demi mendapatkan
        uang.
      </p>
    </>
  ),
};

export const ListWatchedImg = ({ imgLandscape }) => {
  return (
    <>
      <div className="movieListContainer">
        <img className="movieListImg" src={imgLandscape} alt="imgLandscape1" />
      </div>
    </>
  );
};

export const ListFilmImg = ({ imgPotrait }) => {
  return (
    <>
      <div className="movieListContainer">
        <img className="movieListImg2" src={imgPotrait} alt="imgPotrait" />
      </div>
    </>
  );
};
