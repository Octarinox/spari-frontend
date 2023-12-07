"use client"

import {useEffect} from 'react';
import {useRouter} from 'next/navigation';


export default function AnalyticsPage () {
    const router = useRouter();
    useEffect(() => {
        router.push("/analytics/queue");
    }, []);
}