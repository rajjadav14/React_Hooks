import { useState } from 'react';

export const useGetTime = () => {
    function getCurrentTime() {
        const date = new Date();
        return date.getHours() + ' : ' + date.getMinutes() + ' : ' + date.getSeconds();
    }
    const [time, setTime] = useState(getCurrentTime());

    setTimeout(() => {
        setTime(getCurrentTime());
    }, 1000);

    return [time];
}