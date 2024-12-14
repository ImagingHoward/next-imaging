import React, { useContext } from 'react';

export type UserStatus = 'logged-in' | 'anonymous' | 'loading';

export interface IUserContext {
  info?: IUserProfile;
  loading: boolean;
  loadUserProfile: () => void;
}

export const UserContext = React.createContext<IUserContext>({
  loading: true,  // Default loading state
  loadUserProfile: () => {},  // Default noop function
});

const useUserContext = () => {
  return useContext(UserContext);
};

export default useUserContext;
