import * as React from 'react';

interface IHello {
    message?: string;
}

// const Hello: React.FunctionComponent<IHello> = props => {
//     return <h1>{props.message}</h1>
// };

const Hello: React.FC<IHello> = props => {
    return (
        <h1>hello world</h1>
    );
};

export default Hello;
