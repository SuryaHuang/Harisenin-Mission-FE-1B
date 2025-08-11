import "../Css/Beranda.css";

const MenuContainer = () => {
  return (
    <div className="menu-container">
      <ul className="menu-list">
        <li className="menu-list-item">
          <a href="#">Series</a>
        </li>
        <li className="menu-list-item">
          <a href="#">Film</a>
        </li>
        <li className="menu-list-item">
          <a href="#">Daftar Saya</a>
        </li>
      </ul>
    </div>
  );
};

export default MenuContainer;
