import * as React from 'react';
import { useContext } from 'react';
import { ThemeContext, UserContext } from '../../context';

const Title: React.FC = () => {
    const themeContext = useContext(ThemeContext);
    console.log(themeContext);
    return (
        <>
            <span style={themeContext.theme}>
                Title
            </span>
            <button onClick={themeContext.toggleTheme}>切换</button>
        </>
    );
};

export default Title;