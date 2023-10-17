"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const EventsPageSolo = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/events/UPCOMING');
    }, []);

    return null;
};

export default EventsPageSolo;
