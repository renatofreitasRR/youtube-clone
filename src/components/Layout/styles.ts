import styled from 'styled-components';

//SB -> Search Bar
//OP -> Options
//CL -> Channels List
export const Grid = styled.div`
    display:grid;
    grid-template-columns:17vw auto;
    grid-template-rows:56px auto;
    grid-template-areas:
    'SB SB'
    'OP CL';
    height:100vh;
`;
