import * as React from 'react';
import { FC, useState } from 'react';

const UseState: FC  = () => {
    const [like, setLike] = useState(0);

    return (
        <button onClick={ (e) => { setLike(like + 1); } }>
            {like}
        </button>
    );
};

export default UseState;
