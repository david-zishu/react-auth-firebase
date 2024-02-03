import { useState } from "react";
import { Link } from "react-router-dom";

const Reset = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="reset">
      <div className="reset__container">
        <input
          type="text"
          className="reset__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button className="reset__btn">Send password reset email</button>

        <div>
          Don&apos;t have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
};

export default Reset;
