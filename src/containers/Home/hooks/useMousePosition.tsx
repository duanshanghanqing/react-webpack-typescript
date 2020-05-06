// 自定义 hook，函数名必须以use开头
// 在任意地方引入即可，


import * as React from 'react';
import { useState, useEffect } from 'react';

const useMousePosition = () => {
    const [positions, setPositions] = useState({ X: 0, Y: 0 });
    useEffect(() => {
        const updataMouse = (e: MouseEvent) => {
            setPositions({ X: e.clientX, Y: e.clientY });
        };
        document.addEventListener('mousemove', updataMouse);
        return () => {
            document.removeEventListener('mousemove', updataMouse);
        };
    }, [positions]);

    return positions;
};

export default useMousePosition;
