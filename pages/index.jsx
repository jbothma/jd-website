import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { getSortedProjectsData } from '../lib/projects';

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData();
    return {
        props: {
            allProjectsData,
        },
    };
}

function Header({ title }) {
    return <h1>{title}</h1>;
}

export default function HomePage({allProjectsData}) {
    const title = "JD Bothma"
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header title={title} />
            <h2>Projects</h2>
            <ul>
                {allProjectsData.map(({id, lastUpdateDate, title}) => (
                    <li key={id}>
                        <Link href={`/projects/${id}`}>{title}</Link> {lastUpdateDate}
                    </li>
                ))}
            </ul>
            
        </>
    );
}


