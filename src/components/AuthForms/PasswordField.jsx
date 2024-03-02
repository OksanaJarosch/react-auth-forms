import { useState } from "react";

export const PasswordField = ({ field }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>

            <input
                type={showPassword ? 'text' : 'password'}
                {...field}
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
                <svg width="24" height="24" viewBox="0 0 24 24">
                    {showPassword ? (
                        <use href="/img/sprait.svg#eye-off" />
                    ) : (
                        <use href="/img/sprait.svg#eye" />
                    )}
                </svg>
            </button>

        </>
    );
};