import styled from 'styled-components';
import { Home } from 'styled-icons/material-rounded';

export const Container = styled.div`
    grid-area: OP;
    background-color: var(--secondary);
    max-height: calc(100vh - 56px);
    > div:first-child{
        margin-top:8px;
    }

    > .option-button{
        
        height:40px;
        display:flex;
        align-items:center;
        justify-content:flex-start;
        padding-left: 24px;
        color: var(--white);
        > span{
            color: var(--white);
            padding-left: 24px;
            font-weight: 500;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        > .selected{
            background-color: var(--selected);
        }

        &:hover{
            background-color: #ccc;
        }
    }
`;
export const HomeIcon = styled(Home)`
    width:25px;
    height:25px;
`;
export const Separator = styled.div`
    margin: 16px 0;
    width:100%;
    height:1px;
    background-color: var(--tertiary);
`;

