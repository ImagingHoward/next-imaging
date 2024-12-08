import React, { useState } from "react";
import classes from "./request-password-reset.module.sass";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import UserHero from "../user-hero/user-hero.component";

interface FormData {
  email: string;
}

const RequestPasswordReset = () => {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/users/request-password-reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Password reset request was successful
        setSuccess(true);
        setErrorMessage(null); // Clear previous errors
      } else {
        // Handle failed request (e.g., email not found or invalid)
        setSuccess(false);
        setErrorMessage(result.message || "An error occurred while processing your request.");
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
          A password reset link has been sent to your email. Please check your inbox.
        </p>
      )}

      {/* Display error message */}
      {errorMessage && !success && (
        <p className={classes.errorMessage}>
          {errorMessage}
        </p>
      )}

      {!success && (
        <form className={classes.registerForm} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Please enter your email",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && typeof errors.email.message === 'string' && <p className={classes.error}>{errors.email.message}</p>}
          </div>

          <input type="submit" value="Request Password Reset" />
        </form>
      )}
    </div>
  );
};

export default RequestPasswordReset;