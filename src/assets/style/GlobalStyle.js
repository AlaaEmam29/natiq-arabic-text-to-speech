import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {

  --light-blue: #E9F1FA;
  --bright-blue: #00ABE4;
      --white: #FFFFFF;
      --color-text: #1e375a;
      --active : #2364d2;
      --color-hover: #2373ff;
      --color-input-bright: #A9CAF1;
      --color-input-dark: #6B93D9

;


}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}

html {
  font-size: 62.5%;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
  
  color: var( --color-text);
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}



input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-input-dark);
  outline-offset: -1px;
}



a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

}
.btn-close
{

  all: unset;
  display: inline-block;
  background-color: red;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: white;
  text-align: center;
  margin-left: 1rem;
}
.hidden{
  display: none;
}

`;
export default GlobalStyle;
