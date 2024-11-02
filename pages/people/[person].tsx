import { GetServerSideProps } from 'next';
import { People } from "@/@types/mil/people";

import PeopleList from "@/constants/mil/people/people-list";

import { MilTemplate } from '@/components/page-templates';
import MilHead from '@/components/basic-components/mil/head/head.component';
import Container from '@/components/basic-components/layout/container/container.component';
import Breadcrumbs from '@/components/shared-components/breadcrumbs/breadcrumbs.component';
import Person from '@/components/page-components/mil/people/person/person.component';

interface IProps {
	data: People.IPerson;
}

const PersonPage = (props: IProps) => {
	const breadcrumbs: Breadcrumb[] = [
		['PEOPLE', '/people'],
		[props.data.name, '']
	];

	return (
		<MilTemplate>
			<MilHead />
			<Container>
				<Breadcrumbs breadcrumbs={breadcrumbs} />
				<Person data={props.data} />
			</Container>
		</MilTemplate>
	);
}

export const getServerSideProps: GetServerSideProps<IProps> = async ({ req, params }) => {
	const person = params?.person as string || '';

	return {
		props: {
			data: PeopleList[person]
		},
	};
}

export default PersonPage;