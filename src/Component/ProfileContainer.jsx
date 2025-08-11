import { useEffect, useState, useRef } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

const ProfileContainer = () => {
  const checkBoxRef = useRef(null);
  const dropDownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        checkBoxRef.current?.checked &&
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target)
      ) {
        checkBoxRef.current.checked = false;
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="profile-container">
        <img
          className="profile_picture"
          src="../src/images/Logo/profPic.png"
          alt="profile"
        />
        <div className="dropdown-container">
          <div className="dropdown" ref={dropDownRef}>
            <input
              type="checkbox"
              id="profile-toggle"
              hidden
              ref={checkBoxRef}
            />
            <label htmlFor="profile-toggle">
              <IoChevronDownSharp className="drop-icon" />
            </label>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">
                <IoPerson /> Profil Saya
              </a>
              <a href="#" className="dropdown-item">
                <IoStar /> Ubah Premium
              </a>
              <a href="/" className="dropdown-item">
                <IoLogOutOutline /> Keluar
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileContainer;
