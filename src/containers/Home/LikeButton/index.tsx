import * as React from 'react';
const { useState } = React

const LikeButton: React.FC  = () => {
    const [like, setLike] = useState(0)
    return (
        <button onClick={() => { setLike(like + 1) }}>
            {like}
        </button>
    )
}

export default LikeButton;
