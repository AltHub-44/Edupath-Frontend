import { useState } from "react";
import '../styles/auth/rememberMe.css';

const RememberMe = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="toggle-container">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <span className={`toggle-slider ${isChecked ? "active" : ""}`}></span>
    </label>
  );
};

export default RememberMe;
