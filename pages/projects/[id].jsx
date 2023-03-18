import Link from 'next/link';
import Head from 'next/head';
import { getAllProjectIds, getProjectData } from '../../lib/projects';

export async function getStaticProps({ params }) {
    const project = await getProjectData(params.id);
    return {
        props: {
            project,
        },
    };
}

export default function Project({ project }) {
    return (
        <>
            <Head>
                <title>{project.title}</title>
            </Head>
            <Link href="/">Home</Link>

            <h1>{project.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
        </>
    );
}

export async function getStaticPaths() {
    const paths = getAllProjectIds();
    return {
        paths,
        fallback: false,
    };
}