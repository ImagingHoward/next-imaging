import React, { useState } from "react";

import {  UserContext} from '../../../hooks/auth';

interface IProps {
	children: React.ReactNode;
}

export interface IUserProviderState {
  loading: boolean;
	info?: IUserProfile;
}

const UserProvider = (props: IProps) => {
  const [state, setState] = useState<IUserProviderState>({ loading: true });
  
  console.log('UserProvider: ', props);

  return (
		<UserContext.Provider value={{}} >
			{props.children}
		</UserContext.Provider>
  );
};

export default UserProvider;
