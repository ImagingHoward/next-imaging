import React, { useRef, useState, useContext } from "react";
import classes from "./signin.module.sass";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import UserHero from "../user-hero/user-hero.component";
import { useUserContext } from "@/hooks/auth";

interface FormData {
  email: string;
  password: string;
}

const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const router = useRouter();
  const user = useUserContext();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/users/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem('STAINAI_USER_PROFILE', JSON.stringify(result.user));
        user.loadUserProfile();
        setErrorMessage(null);
        router.push('/stainai/');
      } else {
        setErrorMessage(result.message)
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error during signin:", error);
      setErrorMessage('Error during signin');
    }
  };


  return (
    <div className={classes.wrapper}>
      <div className={classes.createNav}>
        <a href="/stainai/user/singup/intro"> Create your STAIN.AI ID</a>
      </div>
      <UserHero />

      {errorMessage && (
        <div className={classes.errorMessage}>{errorMessage}</div>
      )}

      <div className={classes.signin}>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={classes.morstainid}>
            <label>Email</label>
            <input
              type="text"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && typeof errors.email.message === 'string' && <p className={classes.error}>{errors.email.message}</p>}
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
            {errors.password && typeof errors.password.message === 'string' && <p className={classes.error}>{errors.password.message}</p>}
          </div>

          <input
            type="submit"
            onClick={handleSubmit(onSubmit)}
            value="Sing In"
          />
        </form>

        <div className={classes.note}>
          <a href="/stainai/user/request-password-reset">
            Forget STAIN.AI ID Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;