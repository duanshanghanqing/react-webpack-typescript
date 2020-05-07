import * as React from 'react';
import { FC } from 'react';
import { ThemeContext, themes } from './context';
import Header from './Header';

const UseState: FC = () => {
    const [themeContext, setThemeContext] = React.useState({
        theme: themes.light,
        toggleTheme: toggleTheme,
    });

    // 实现切换主题
    function toggleTheme() {
        console.log(themeContext.theme);
        if (JSON.stringify(themeContext.theme) === JSON.stringify(themes.dark)) {
            themeContext.theme = themes.light;
            setThemeContext({
                theme: themes.light,
                toggleTheme: toggleTheme,
            });
        } else {
            themeContext.theme = themes.dark;
            setThemeContext({
                theme: themes.dark,
                toggleTheme: toggleTheme,
            });
        }
    }

    return (
        <ThemeContext.Provider value={themeContext}>
            <Header />
        </ThemeContext.Provider>
    );
};

export default UseState;
