import React from 'react';
import TrendNavbar from './trends-navbar';
import LinksSideBar from './side-bar';

export default function LinksPage() {
    return (
        <div className='flex flex-row'>
            <div className='flex flex-col w-full'>
                <TrendNavbar></TrendNavbar>
                <div className='p-2'>
                    This is the links page!
                </div>
            </div>
            <LinksSideBar></LinksSideBar>
        </div>
    );
}
