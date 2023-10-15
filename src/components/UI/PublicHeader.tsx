"use client";

import { Layout } from "antd";
import Link from 'next/link';

const { Header } = Layout;

const PublicHeader = () => {
    return (
        <Header className="flex items-center justify-between"  >
            <Link href={`/`}> Travel Agency</Link>
            <div className="flex gap-5 text-md font-semibold">
                <Link href={`/`}>Home</Link>
                <Link href={`/service`}>Service</Link>
                <Link href={`/news`}>News</Link>
                <Link href={`/faq`}>FAQ</Link>
            </div>
            <div>
            <Link href={'/login'} className='text-white font-semibold rounded uppercase px-4 py-2'>Login</Link>
            <Link href={'/register'} className='text-white font-semibold rounded uppercase border border-white px-4 py-2'>Register</Link>
          </div>
        </Header>

    );
};

export default PublicHeader;