import styled from "styled-components";

const StyledSideBar = styled.div`
width: 300px;
/* background-color: red; */
height: fit-content;
background: rgba(217, 217, 217, 0.37);
box-shadow: 0px 0px 25px 7px rgba(104, 208, 253, 0.29);
border-radius: 20px;
color: white;
padding: 10px 10px;
`

export default function SideBar(){
    return <StyledSideBar>
        <ul>
            <li>Button
            <ul>
                <li>style name 1</li>

                <li>style name 2</li>
            </ul>
            </li>
            <li>Nav Bar
            <ul>
                <li>style name 1</li>

                <li>style name 2</li>
            </ul></li>
            <li>Footer
            <ul>
                <li>style name 1</li>

                <li>style name 2</li>
            </ul></li>
            <li>Cards
            <ul>
                <li>style name 1</li>

                <li>style name 2</li>
            </ul></li>
        </ul>
        
    </StyledSideBar>
}