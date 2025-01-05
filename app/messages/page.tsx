import React from 'react';
import MessagesNavbar from './navbar';
import MessagesSideBar from './sidebar';

export default function LinksPage() {
    return (
        <div className='flex flex-row'>
            <div className='flex flex-col w-full'>
                <MessagesNavbar></MessagesNavbar>
                <div className='p-2'>
                    This is the messages page!
                </div>
            </div>
            <MessagesSideBar></MessagesSideBar>
        </div>
    );
}
