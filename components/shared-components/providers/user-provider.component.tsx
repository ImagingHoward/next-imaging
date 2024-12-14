import React, { useEffect, useState, useCallback } from "react";
import { UserContext } from "../../../hooks/auth";

interface IProps {
  children: React.ReactNode;
}

export interface IUserProviderState {
  loading: boolean;
  info?: IUserProfile;
}

const UserProvider = (props: IProps) => {
  const [state, setState] = useState<IUserProviderState>({ loading: true, });

  // Load user profile from localStorage
  const loadUserProfile = useCallback(() => {
    const userProfile = localStorage.getItem("STAINAI_USER_PROFILE")

    if (userProfile) {
      setState({ loading: false, info: JSON.parse(userProfile) });
    } else {
      setState({ loading: false });
    }
  }, []);

  useEffect(() => {
    loadUserProfile();
  }, []);

  return (
    <UserContext.Provider value={{ info: state.info, loading: state.loading, loadUserProfile }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
