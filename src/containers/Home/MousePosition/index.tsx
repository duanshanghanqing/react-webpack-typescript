import * as React from 'react';
import useMousePosition from '../hooks/useMousePosition';

const MousePosition: React.FC = () => {
    // 这里使用自定义 hooks
    const positions = useMousePosition();
    return (
        <p>X: {positions.X} Y: {positions.Y}</p>
    );
};

export default MousePosition;
