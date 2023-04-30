import styled from "styled-components"
import output from '../assets/copyCss.png'

const StyledBody = styled.div`
/* background-color: blue; */
width: 700px;
height: fit-content;
display: flex;
flex-direction: column;
padding: 0 20px 0 20px;
row-gap: 20px;

`

const Heading = styled.h1`                              

        color: white;


`

const  HtmlContainer = styled.div`
    background: rgba(217, 217, 217, 0.35);
box-shadow: 0px 0px 25px 7px rgba(104, 208, 253, 0.29);
border-radius: 10px;
height: fit-content;
padding: 20px 20px;
width: 90%;
color: white;

`

const CssContainer = styled(HtmlContainer)``

const OutputContainer = styled(CssContainer)`
width: fit-content
`

const html = `<div class="polaroid rotate_right">
<img src="pulpitrock.jpg" alt="Pulpit rock" width="284" height="213">
<p class="caption">The pulpit rock in Lysefjorden, Norway.</p>
</div>

<div class="polaroid rotate_left">
<img src="cinqueterre.jpg" alt="Monterosso al Mare" width="284" height="213">
<p class="caption">Monterosso al Mare. One of the five villages in Cinque Terre, Italy.</p>
</div>`

const css =`div.polaroid {
    width: 284px;
    padding: 10px 10px 20px 10px;
    border: 1px solid #BFBFBF;
    background-color: white;
    box-shadow: 10px 10px 5px #aaaaaa;
  }
  
  div.rotate_right {
    float: left;
    -ms-transform: rotate(7deg); /* IE 9 */
    -webkit-transform: rotate(7deg); /* Safari */
    transform: rotate(7deg);
  }
  
  div.rotate_left {
    float: left;
    -ms-transform: rotate(-8deg); /* IE 9 */
    -webkit-transform: rotate(-8deg); /* Safari */
    transform: rotate(-8deg);
  }`


export default function Body(){
    return <StyledBody>
        <Heading>Button {">"} Style Name</Heading>
        <HtmlContainer>
            <p>{html}</p>
        </HtmlContainer>
        <CssContainer>{css}</CssContainer>
        <OutputContainer>
            <img src={output} alt="" />
        </OutputContainer>
    </StyledBody>

}