import styled from 'styled-components';
import { Menu } from 'styled-icons/boxicons-regular';
import { Keyboard, Search } from 'styled-icons/material-sharp';
import { Notifications, Apps } from 'styled-icons/material-rounded';
import { DeviceCameraVideo } from 'styled-icons/octicons';
export const Container = styled.div`
    grid-area: SB;
    background-color: var(--secondary);
    display: flex;
    align-items:center;
    justify-content: space-between;
    > .yticon{
        margin-left:24px;
        display:flex;

        > img{
            margin-left:24px;
            width: 75px;
        }
    }
    > .input{
        position: relative;
        display:flex;
        > input{
            background-color: var(--search);
            border-radius: 2px 0 0 2px;
            border: 0.1px solid var(--searchbutton);
            padding: 5px;
            font-size: 1rem;
            font-weight:500;
            width:526px;
            height:26px;
        }

        > .search{
            background-color: var(--searchbar);
            display:flex;
            align-items:center;
            justify-content:center;
            width: 51px;
            height: 26px;
            background-color: var(--searchbutton);
            border-radius: 0 2px 2px 0;
        }
    }
    > .icons{
        display:flex;
        align-items:center;
        position:relative;
        > img{
            width:30px;
            height:30px;
            object-fit: cover;
            border-radius:50%;
            margin-right: 24px;
        }
        > .notify{
            position:relative;
            &::after{
                display:flex;
                align-items:center;
                justify-content:center;
                color: var(--white);
                background-color: var(--red);
                width: 18px;
                height: 18px;
                position:absolute;
                font-size: 0.7rem;
                border-radius:50%;
                content:'9+';
                z-index:10;
                top: calc(8px - 50%);
                left: 37.5px;
            }
        }
    }      
`;
export const MenuIcon = styled(Menu)`
    color: var(--white);
    width: 32px;
    height: 24px;
`;
export const SearchIcon = styled(Search)`
    color: var(--tertiary);
    width: 20px;
    height: 20px;
`;
export const KeyboardIcon = styled(Keyboard)`
   position: absolute;
   z-index:10;
   width:25px;
   height:20px;
   top:2px;
   right:55px;
   color: var(--tertiary);
`;
export const CameraIcon = styled(DeviceCameraVideo)`
    color: var(--white);
    width: 20px;
    height: 20px;
`;
export const AppsIcon = styled(Apps)`
    margin-left: 24px;
    color: var(--white);
    width: 24px;
    height: 24px;
`;
export const NotificationIcon = styled(Notifications)`
    position:relative;
    margin: 0 24px;
    color: var(--white);
    width: 24px;
    height: 24px;
    display: block;
`;
