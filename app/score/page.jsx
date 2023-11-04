"use client"
import Loading from '@app/loading';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
const ScorePageSolo = () => {
	const router = useRouter();
	useEffect(() => {
		router.push('/');
	}, []);
	return <Loading />;
};
export default ScorePageSolo;
