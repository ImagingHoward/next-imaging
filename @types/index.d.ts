declare global {
	type Breadcrumb = [string, string];

	interface IUserProfile {
		use_id: string;
		email: string;
		firstname: string;
		lastname: string;
		organization: string;
	}

}

export {};