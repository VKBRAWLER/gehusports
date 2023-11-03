"use client";
import Loading from '@app/loading';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
const EventsPageSolo = () => {
    const router = useRouter();
    useEffect(() => {
        router.push('/events/UPCOMING');
    }, []);
    return <Loading/>;
};
export default EventsPageSolo;