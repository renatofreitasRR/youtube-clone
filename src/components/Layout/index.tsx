import React from 'react';
import { Grid } from './styles';
import SearchBar from '../SearchBar';
import Options from '../Options';
import ChannelListo from '../ChannelList';
const Layout: React.FC = () => {
  return(
      <Grid>
          <SearchBar />
          <Options />
          <ChannelListo />
      </Grid>
  )
}

export default Layout;