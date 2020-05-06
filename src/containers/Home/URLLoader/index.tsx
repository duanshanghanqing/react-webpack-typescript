import * as React from 'react';
import { FC } from 'react';
import useURLLoader from '../hooks/useURLLoader';
import { Button } from 'antd';

interface IResult {
    message: string;
    status: string;
}

const URLLoader: FC = () => {
    const [ num, setNum ] = React.useState<number>(0);

    const { data, loading } = useURLLoader('https://dog.ceo/api/breeds/image/random', [num]);
    const dogResult = data as IResult; // 转换类型
    return (
        <>
            <Button type="primary" onClick={() => { setNum(num + 1); }}>切换图片</Button>
            <div>
                {
                    loading ? <p>加载中....</p> : <img style={{ height: '100%' }} src={dogResult && dogResult.message} />
                }
            </div>
        </>
    );
};

export default URLLoader;