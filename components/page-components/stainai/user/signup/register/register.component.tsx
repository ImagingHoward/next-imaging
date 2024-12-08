import React, { useState } from "react";
import classes from "./register.module.sass";
import { useForm } from "react-hook-form";

import UserHero from "../../user-hero/user-hero.component";

interface FormData {
  firstname: string;
  lastname: string;
  organization: string;
  email: string;
}

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [isExist, setIsExist] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // If registration is successful
        setSuccess(true);
        setIsExist(false);
      } else if (result.message === "Email already exists") {
        // If email already exists
        setIsExist(true);
        setSuccess(false);
      } else {
        // Handle other errors
        setSuccess(false);
        setIsExist(false);
        console.error("Unexpected error:", result);
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error during registration:", error);
      setSuccess(false);
      setIsExist(false);
    }
  };

  return (
    <div className={classes.wrapper}>
      <UserHero />
      <div className={classes.title}>
        A STAIN.AI account grants you access to all AI-Stain services.
      </div>
      {/* Display success message */}
      {success && (
        <p className={classes.successMessage}>
          Thank you for registering. Please check your Email.
        </p>
      )}
      {/* Display email exists message */}
      {!success && isExist && (
        <p className={classes.existsMessage}>
          Email already exists. Please use a different email.
        </p>
      )}
      {/* Registration form */}
      {!success && (
        <form className={classes.registerForm} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>First Name</label>
            <input
              {...register("firstname", { required: "First name is required", maxLength: 30 })}
            />
            {errors.firstname && typeof errors.firstname.message === 'string' && <p className={classes.error}>{errors.firstname.message}</p>}

            <label>Last Name</label>
            <input
              {...register("lastname", { required: "Last name is required", maxLength: 30 })}
            />
            {errors.lastname && typeof errors.lastname.message === 'string' && <p className={classes.error}>{errors.lastname.message}</p>}
          </div>

          <div>
            <label>Organization</label>
            <input
              {...register("organization", { required: "Organization is required", maxLength: 30 })}
            />
            {errors.organization && typeof errors.organization.message === 'string' && <p className={classes.error}>{errors.organization.message}</p>}

            <label>Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && typeof errors.email.message === 'string' && <p className={classes.error}>{errors.email.message}</p>}
          </div>

          <input type="submit" value="Register" />
        </form>
      )}
    </div>
  );
};

export default Register;