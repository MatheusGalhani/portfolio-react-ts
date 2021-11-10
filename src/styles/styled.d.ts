import 'styled-components';

interface TypeColor {
    color: string;
    hover: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        base: {
            background: string;
        },
        color: {
            textColor: string;
            paragraphColor: string;
            skillBackground: string;
            lightBlue: string;
            contactBottomIcon: string;
        },
        footer: {
            textColor: string;
            background: string;
        };
        button: {
            color: string;
            hover: string;
            text: string;
        }
    }
}
