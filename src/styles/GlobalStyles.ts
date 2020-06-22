import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-weight:500;
    }
    html, body, #root{
        height: 100%;
    }
    *, button, input{
        border: 0;
        outline: 0;
    }
    :root{
        --primary:#181818;
        --secondary: #202020;
        --tertiary:#909090;
        --selected:#727272;
        --channel:#646464; 
        --white:#ffffff;
        --search:#121212;
        --searchbar:#313131;
        --red:#cc0000;
        --searchbutton:#313131;
    }
`