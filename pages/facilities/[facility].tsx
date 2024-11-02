import { GetServerSideProps } from 'next';
import { Facilities } from "@/@types/mil/facilities";
import FacilitiesList from "@/constants/mil/facilities-list";

import { MilTemplate } from '@/components/page-templates';
import MilHead from '@/components/basic-components/mil/head/head.component';
import Container from '@/components/basic-components/layout/container/container.component';
import Breadcrumbs from '@/components/shared-components/breadcrumbs/breadcrumbs.component';
import Facility from '@/components/page-components/mil/facilities/facility/facility.component';

interface IProps {
	data: Facilities.IFacility;
}

const FacilityPage = (props: IProps) => {
	const breadcrumbs: Breadcrumb[] = [
		['FACILITIES', '/facilities'],
		['FACILITY', '']
	];

	return (
		<MilTemplate>
			<MilHead />
			<Container>
				<Breadcrumbs breadcrumbs={breadcrumbs} />
				<Facility data={props.data} />
			</Container>
		</MilTemplate>
	);
}

export const getServerSideProps: GetServerSideProps<IProps> = async ({ req, params }) => {
	const facility = params?.facility as Facilities.FacilityType || '';

	return {
		props: {
			data: FacilitiesList[facility],
		},
	};
}

export default FacilityPage;