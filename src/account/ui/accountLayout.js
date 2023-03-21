import React, {Component} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Login from './login';
import Register from './register';
import AccountResource from '../resource/id';

const theme = createTheme();

export default  class AccountLayout extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          mode: AccountResource.AccountMode.Login,
        }
    }

    displayMode() {
      let displayModeUI = [];

      if (this.state.mode === AccountResource.AccountMode.Login) {
        displayModeUI.push(<Login onChangeMode={this.onChangeMode} />);
        
      } else if (this.state.mode === AccountResource.AccountMode.Register) {
        displayModeUI.push(<Register onChangeMode={this.onChangeMode} />);
      }

      return displayModeUI;
    }

    onChangeMode = (mode) => {
      if (this.state.mode !== mode) {
        this.setState({mode: mode});
      }
    }

    render() {
        const displayModeUI = this.displayMode();

        return (
            <ThemeProvider theme={theme}>

              <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                  item
                  xs={false}
                  sm={5}
                  md={7}
                  sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                      t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

                <Grid item xs={12} sm={7} md={5}  elevation={6} square>

                  {displayModeUI}
                  
                </Grid>

              </Grid>
            </ThemeProvider>
        );
    }
}