import styled from 'styled-components';

export const Container = styled.div`
    padding:48px 0 0 24px ;
    grid-area: CL;
    background-color: var(--primary);
    
    > h1{
        font-size: 20px;
        color: var(--white);
        margin-bottom:32px;
    }
    > .channel-list{
        display: flex;
        justify-content: center;

        > div:not(:first-child){
            margin-left: 16px;
        }

        > .channel{
        display:flex;
        flex-direction: column;
        height:300px;
        width: 247px;

        > .channel-banner{
            height: 139px;
            width: 247px;
            background-color: #ccc;
        }

        > .channel-footer{
            display:flex;
            margin-top: 16px;

            > .channel-footer-icon{
                height: 36px;
                width: 36px;
                border-radius: 50%;
                background-color: #ccc;
            }

            > .channel-footer-description{
                padding-left: 16px;
                display:flex;
                flex-direction: column;
                color: var(--white);
                
                > span{
                    margin-bottom: 8px;
                }
            }
        }
    }
    }

`;
