import styled from "styled-components"

const Nav = styled.div`

width: 100%;
height: 30px;
background: rgba(109, 109, 109, 0.45);
box-shadow: 0px -1px 33px 3px rgba(104, 208, 253, 0.54);
color: white;
display: flex;
align-items: center;
padding: 20px;
    `

const Heading = styled.h1`
    font-weight: bold;
    font-size: 30px;

`

export default function NavBar(){
    return <Nav>
        <Heading>
            copyCSS
        </Heading>
        
    </Nav>

}