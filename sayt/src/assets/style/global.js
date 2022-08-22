import {createGlobalStyle} from "styled-components"
import './font.css'
import './icon.css'

const Globalstyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif; 
    }
    .container{
        max-width: 1250px;
        margin: 0 auto;
        padding: 0 15px;
    }
`
export default Globalstyle;