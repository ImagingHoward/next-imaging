declare global {
	type Breadcrumb = [string, string];

	interface IUserProfile {
		userid: string;
		email: string;
		firstname: string;
		lastname: string;
		organization: string;
	}

}

export {};