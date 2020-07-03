import * as React from 'react';
import { FC, useState, useRef, useEffect } from 'react';

const UseRef: FC = () => {
    const [like, setLike] = useState(0);
    const likeRef = useRef(0);

    function handAlertClick() {
        setTimeout(() => {
            // alert(like); // 问题： 打印的时 点击时 like 的值，而不是最终的值
            alert(likeRef.current); // 解决问题：使用useRef，就打印的是最终的值了
        }, 3000);
    }

    // 使用 useRef 实现componentDidMount 和 componentDidUpdata 功能
    const didMountRef = useRef(false);
    useEffect(() => {
        if (didMountRef.current) {
            console.log('实现componentDidUpdata');
        } else {
            console.log('实现componentDidMount');
            didMountRef.current = true;
        }
    });

    // 实现获取 dom 节点
    const domRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (domRef && domRef.current) {
            domRef.current.focus();
        }
    });

    return (
        <>
            <button onClick={(e) => { setLike(like + 1); likeRef.current++; }}>
                {like}
            </button>
            <button onClick={handAlertClick}>点我</button>
            <input type="text" ref={domRef}/>
        </>
    );
};

export default UseRef;
