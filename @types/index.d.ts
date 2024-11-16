declare global {
	type Breadcrumb = [string, string];

	interface IUserProfile {
		firstName: string;
		lastName: string;
		organization: string
		email: boolean;
		roles: Array<string>;
	}
}

export {};