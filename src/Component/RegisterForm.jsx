import { useNavigate } from "react-router-dom";
import eyeIcon from "../images/Logo/eye.png";
import googleIcon from "../images/Logo/Gicon.png";
import "../Css/Register.css";

const RegisterForm = () => {
  const navigate = useNavigate();

  return (
    <section className="register-form">
      <form action={() => navigate("/")}>
        <div className="input-box">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            className="inputField"
            placeholder="Masukkan username"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="password">Kata Sandi</label>
          <input
            name="password"
            type="password"
            className="inputField"
            placeholder="Masukkan kata sandi"
            required
          />
          <img src={eyeIcon} alt="Eye Icon" />
        </div>
        <div className="input-box">
          <label htmlFor="password2">Konfirmasi Kata Sandi</label>
          <input
            name="password2"
            type="password"
            className="inputField"
            placeholder="Masukkan kata sandi"
            required
          />
          <img src={eyeIcon} alt="Eye Icon" />
        </div>
        <div className="login-register">
          <p>
            Sudah punya akun?
            <a href="/" className="login-link">
              Masuk
            </a>
          </p>
        </div>

        <div className="form-btn">
          <button type="submit" className="btn">
            Daftar
          </button>
          <p className="atau">Atau</p>
          <button type="submit" className="btn2 google-register" formNoValidate>
            <img src={googleIcon} alt="Google Icon" />
            Daftar dengan Google
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;
