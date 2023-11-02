const buttonsData = [
    {
        name: 'button-1',
        html: `&lt;button className=&quot;button-1&quot;&gt;Hover me&lt;/button&gt;`,
        css: `.button-1 {
    padding: 4rem;
    font-size: 1.6rem;
    background-color: red;
    color: var(--color-font);
    width: 20rem;
    height: 10rem;
}`,
    },
    {
        name: 'button-2',
        html: `&lt;button className=&quot;button-1&quot;&gt;Hover meaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&lt;/button&gt;`,
        css: `.button-2 {
    padding: 4rem;
    font-size: 1.6rem;
    background-color: red;
    color: var(--color-font);
    width: 20rem;
    height: 10rem;








    allo
}`,
    },
    {
        name: 'button-3',
        html: `&lt;button className=&quot;button-1&quot;&gt;Hover meaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&lt;/button&gt;`,
        css: `.button-2 {
    padding: 4rem;
    font-size: 1.6rem;
    background-color: red;
    color: var(--color-font);
    width: 20rem;
    height: 10rem;
}`,
    },
    {
        name: 'button-4',
        html: `&lt;button className=&quot;button-1&quot;&gt;Hover meaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&lt;/button&gt;`,
        css: `.button-2 {
    padding: 4rem;
    font-size: 1.6rem;
    background-color: red;
    color: var(--color-font);
    width: 20rem;
    height: 10rem;
}`,
    },
];

const addHTMLAndCSS = () => {
    const beforeHTML = `\n<!-- HTML  -->\n`;
    const beforeCSS = `\n\n/* CSS */\n`;
    buttonsData.forEach(buttonData => {
        buttonData.htmlAndCSS =
            beforeHTML + buttonData.html + beforeCSS + buttonData.css;
    });
};

addHTMLAndCSS();

const colors = {
    color_background: 'rgb(6, 3, 14)',
    color_font: 'rgb(236, 219, 186)',
    color_font_black: 'rgb(25, 25, 25)',
    color_accent_1: 'rgb(45, 66, 99)',
    color_accent_2: 'rgb(45, 66, 99)',
    color_accent_3: 'rgb(45, 66, 99)',
    color_contrast_1: 'rgb(200, 75, 49)',
    color_contrast_2: 'rgb(200, 75, 49)',
    color_contrast_3: 'rgb(200, 75, 49)',
    color_light: 'rgb(236, 219, 186)',
};

const codeSampleDuration = 0.5;

export { buttonsData, colors, codeSampleDuration };
