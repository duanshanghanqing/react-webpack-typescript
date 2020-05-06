import * as React from 'react';
import { FC, useState, useEffect } from 'react';

const UseState: FC = () => {

    const [like, setLike] = useState(0);
    useEffect(() => {
        console.log('点击按钮执行');
        document.title = `点击了 ${like} 次`;
    }, [like]); // 添加限制，只有 like 状态发生变化才执行。如果不加当 positions 发生变化的时候也执行了，就浪费性能了



    const [positions, setPositions] = useState({ X: 0, Y: 0 });

    // 类似于 componentDidMount 和 componentDidUpdate:
    // 当你调用useEffect,就是告诉React在刷新DOM之后运行你的副作用函数。
    // 副作用函数在组件中声明，所以可以使用组件的状态（state）和属性（props）。
    // React默认在每一次渲染后运行副作用函数——包括第一次渲染。
    useEffect(() => {
        // 常用场景
        const updataMouse = (e: MouseEvent) => {
            console.log('updataMouse');
            setPositions({ X: e.clientX, Y: e.clientY });
        };
        // 问题，useEffect 每次更新state/props都会执行一下，会出现重复监听事件问题，影响性能
        document.addEventListener('click', updataMouse);
        return () => {
            // 解决上面问题，当 state/props 更新完成后，移除上次绑定的事件监听
            document.removeEventListener('click', updataMouse);
        };
    }, [positions]); // 只有 positions 状态发生变化才执行。如果不加当 title 发生变化的时候也执行了，就浪费性能了

    return (
        <div>
            <button onClick={(e) => { setLike(like + 1); }}>
                {like}
            </button>
            <p>X: {positions.X} Y: {positions.Y}</p>
        </div>
    );
};

export default UseState;