import React, { useContext } from 'react';

export type UserStatus = 'logged-in' | 'anonymous' | 'loading';

export interface IUserContext {
}

export const UserContext = React.createContext<IUserContext>({});

const useUserContext = () => {
	return useContext(UserContext);
};

export default useUserContext;