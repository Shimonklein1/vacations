import React, { useState } from "react";
import styles from "./Login.module.scss"; // Import SCSS module

const Login: React.FC = props => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (username.trim() === "" || password.trim() === "") {
            setError("Both fields are required.");
            return;
        }
        setError("");
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginContainer}>
                <h2 className={styles.heading}>Login</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="username" className={styles.label}>Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={styles.input}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.input}
                            required
                        />
                    </div>
                    {error && <p className={styles.error}>{error}</p>}
                    <button type="submit" className={styles.button}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
