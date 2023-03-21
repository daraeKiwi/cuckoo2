import React, {Component} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import MediaCard from './mediaCard';
import RecipeReviewCard from './recipeReviewCard';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import RestaurantIcon from '@mui/icons-material/Restaurant';

import LayoutResource from '../../layout/resource/id';
import { withRouter } from '../../layout/ui/withRouter';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

class Dashboard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        
        }
    }

    onClickRegisterDiary = () => {
      this.props.navigate(LayoutResource.Path.RegisterDiary);
    }

    render() {

        return (
            <div>

              <Container maxWidth="100" sx={{ mt: 3 }}>
              
                <Grid container spacing={3}>

                  <Grid item xs={12} md={12} lg={12} >
                    <div>
                    <Paper
                      sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        
                      }}
                    >
                      <Typography variant="h5" gutterBottom component="div">
                        오늘의 추천메뉴
                      </Typography>

                      <Grid container spacing={3}>

                        <Grid item xs={12} md={6} lg={3}>
                          <RecipeReviewCard />
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                          <RecipeReviewCard />
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                          <RecipeReviewCard />
                        </Grid>
                        <Grid item xs={12} md={6} lg={3}>
                          <RecipeReviewCard />
                        </Grid>

                        <Fab sx={{position: 'absolute', bottom: 30, right: 30,}} aria-label='Edit' color='primary' onClick={() => this.onClickRegisterDiary()}>
                          <RestaurantIcon />
                        </Fab>

                      </Grid>

                    </Paper>
                    </div>
                  </Grid>

                  {/* 
                  * Chart 
                  <Grid item xs={12} md={12} lg={9}>
                    <Paper
                      sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                      }}
                    >

                    </Paper>
                  </Grid>

                  * Recent Deposits
                  <Grid item xs={12} md={4} lg={3}>
                    <Paper
                      sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                      }}
                    >
    
                    </Paper>
                  </Grid>

                  * Recent Orders 
                  <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                 
                    </Paper>
                  </Grid>
                  */}

                </Grid>

                <Copyright sx={{ pt: 4 }} />

              </Container>
            </div>
        );
    }
}

export default withRouter(Dashboard);