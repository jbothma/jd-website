import Link from 'next/link';
import Head from 'next/head';

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>First project</title>
            </Head>
            <Link href="/">Home</Link>

            <h1>First Post</h1>
        </>
    );
}