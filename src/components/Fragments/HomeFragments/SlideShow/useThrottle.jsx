import { useRef } from 'react';

const useThrottle = (callback, delay) => {
    const lastCall = useRef(0);

    return (...args) => {
        const now = new Date().getTime();
        if (now - lastCall.current >= delay) {
            lastCall.current = now;
            callback(...args);
        }
    };
};

export default useThrottle;
