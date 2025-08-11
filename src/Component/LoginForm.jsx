import { useNavigate } from "react-router-dom";
import "../Css/Login.css";
import eyeIcon from "../images/Logo/eye.png";
import googleIcon from "../images/Logo/Gicon.png";

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <section className="login-form">
      <form action={() => navigate("/homepage")}>
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

        <div className="login-register">
          <p>
            Belum punya akun?
            <a href="/register" className="register-link">
              Daftar
            </a>
            <a href="#" className="forgot-password">
              Lupa kata sandi?
            </a>
          </p>
        </div>

        <div className="form-btn">
          <button type="submit" className="btn">
            Masuk
          </button>
          <p className="atau">Atau</p>
          <button
            type="submit"
            id="google-login-btn"
            className="btn2 google-login"
            formNoValidate
          >
            <img src={googleIcon} alt="Google Icon" />
            Masuk dengan Google
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
