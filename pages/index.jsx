import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <>
            <Head>
                <title>Homepage</title>
            </Head>
            <Header title="Develop. Preview. Ship. 🚀" />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <Link href="/projects/first-project">this page!</Link>
        </>
    );
}


