import styled from 'styled-components'

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid #35b3b9;
    border-color: ${props => props.cart? "#e10055": "#35b3b9"};
    color:${prop => prop.cart? "#e10055": "#35b3b9"};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5 ease-in-out;
    &:hover {
        background:${props => props.cart? "#e10055": "#35b3b9"};
        color: #0d469b;
    }
    &:focus {
        outline: none;
    }
`;