import { GetServerSideProps } from 'next';
import { Research } from "@/@types/mil/research";
import ResearchHighlightsList from "@/constants/mil/highlight-list";

import { MilTemplate } from '@/components/page-templates';
import MilHead from '@/components/basic-components/mil/head/head.component';
import Container from '@/components/basic-components/layout/container/container.component';
import { Highlight } from '@/components/page-components/mil/research';
import Breadcrumbs from '@/components/shared-components/breadcrumbs/breadcrumbs.component';

interface IProps {
	data: Research.IHighlight;
}

const HighlightPage = (props: IProps) => {
	const breadcrumbs: Breadcrumb[] = [
    ['RESEARCH', '/research'],
    ['RESEARCH HIGHLIGHT', '']
  ];

	return (
		<MilTemplate>
			<MilHead />
			<Container>
				<Breadcrumbs breadcrumbs={breadcrumbs} />
				<Highlight data={props.data} />
			</Container>
		</MilTemplate>
	);
}

export const getServerSideProps: GetServerSideProps<IProps> = async ({ req, params }) => {
	const highlight = params?.highlight as Research.HighlightType || '';

	return {
		props: {
			data: ResearchHighlightsList[highlight],
		},
	};
}

export default HighlightPage;