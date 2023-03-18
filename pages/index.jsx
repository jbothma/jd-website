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

    return (
        <>
            <Head>
                <title>Homepage</title>
            </Head>
            <Header title="Develop. Preview. Ship. 🚀" />
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


