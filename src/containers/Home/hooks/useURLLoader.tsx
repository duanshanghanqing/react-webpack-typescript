import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const useURLLoader = (url: string, deps: any[] = []) => {
    const [data, setData] = useState<any>(null);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // 正在加载
        setLoading(true);
        axios.get(url).then(result => {
            setData(result.data);
            setLoading(false);
        });
    }, deps); // 当 deps 发生变化会重新执行 useEffect

    return { data, loading };
};

export default useURLLoader;
