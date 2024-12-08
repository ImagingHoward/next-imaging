import React, { useRef, useState } from "react";
import classes from "./password-reset-form.module.sass";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import UserHero from "../user-hero/user-hero.component";

interface FormData {
  password: string;
  cpassword: string;
}

const PasswordResetForm = () => {
  const router = useRouter();
  const { query } = router;
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async (data: FormData) => {
    if (data.password !== data.cpassword) {
      return;
    }

    // Send token, password, and cpassword to the backend
    try {
      const response = await fetch("/api/users/password-reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: query.token,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // If the reset is successful, show success message
        setSuccess(true);
        setErrorMessage(null); // Clear any previous errors
      } else {
        // Handle failed password reset (e.g., token invalid)
        setSuccess(false);
        setErrorMessage(result.message || "An error occurred while resetting your password.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccess(false);
      setErrorMessage("An error occurred while processing your request.");
    }
  };

  return (
    <div className={classes.wrapper}>
      <UserHero />
      <div className={classes.title}>Reset Your STAIN.AI Password</div>

      {/* Display success message */}
      {success && (
        <p className={classes.successMessage}>
          Your password has been reset successfully. please <a href="/stainai/user">click here</a> to sigin.
        </p>
      )}

      {/* Display error message */}
      {errorMessage && !success && (
        <p className={classes.errorMessage}>
          {errorMessage}
            <br />
            If you're having trouble, please <a href="/stainai/user/request-password-reset">click here</a> to request a new password reset link.
        </p>
      )}
      {!success && (
        <form className={classes.registerForm} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Password</label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "You must specify a password",
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
              })}
            />
            {errors.password && <p className={classes.error}>{errors.password.message}</p>}
          </div>

          <div>
            <label>Confirm password</label>
            <input
              type="password"
              id="cpassword"
              {...register("cpassword", {
                validate: (value) => value === password.current || "The passwords do not match",
              })}
            />
            {errors.cpassword && <p className={classes.error}>{errors.cpassword.message}</p>}
          </div>

          <input type="submit" value="Reset Password" />
        </form>
      )}
    </div>
  );
};

export default PasswordResetForm;
