import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Deposits from './Deposits';
import StatsTicketSold from './StatsTicketSold';
import Paper from '@mui/material/Paper';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    primary: {

      main: '#6d1493',

    },
    secondary: {

      main: '#6d1493',
      
    },
  },
});

const Statsglobale = ({events, Ctitket, URL, Ctitketsold, setCticketsold}) => {
    return ( 
      <ThemeProvider theme={defaultTheme}>
        <Container maxWidth="lg" sx={{ mt:4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              
              {/* Recent Deposits */}
              
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 184,
                  }}
                >
                  <Deposits 
                  events={events}
                  Ctitket={Ctitket}
                  URL={URL}
                  Ctitketsold={Ctitketsold}
                  setCticketsold={setCticketsold}
                  />
                </Paper>
              </Grid>
              
              {Ctitket.map((item) => {
  return (
<Grid item xs={12} md={4} lg={3} key={item.id_categoriebillet}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 184,
                  }}
                >
                  <StatsTicketSold 
                  events={events}
                  Ctitket={Ctitket}
                  item={item}
                  URL={URL}
                  Ctitketsold={Ctitketsold}
                  setCticketsold={setCticketsold}
                  />
                </Paper>
              </Grid>
   )})}   

              {/* Recent Orders */}
              {/* <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid> */}
            </Grid>
          </Container>
    </ThemeProvider>
     );
}
 
export default Statsglobale;