import React, {Component} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Fab from '@mui/material/Fab';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DiningOutlinedIcon from '@mui/icons-material/DiningOutlined';
import MediaCard from '../../dashboard/ui/mediaCard';
import LayoutResource from '../../layout/resource/id';
import { withRouter } from '../../layout/ui/withRouter';

class Menu extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        
        }
    }

    onClickRegisterMenu = () => {
        this.props.navigate(LayoutResource.Path.RegisterMenu);
    }

    render() {

        return (
            <div>
                <Container maxWidth="100" sx={{ mt: 3 }}>

                    <Grid container spacing={3}>

                        <Grid item xs={12} md={12} lg={12}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    
                                }}
                            >
                                 
                                
                                    <Typography component="h2" variant="h6" gutterBottom >
                                        <DiningOutlinedIcon sx={{position: 'relative', top: 1}} />         
                                        &nbsp;메뉴
                                    </Typography>
                                    
                                    <Grid container spacing={3}>




                                    {/*<BasicTable />*/}
                                    <Grid item xs={12} md={6} lg={3}>
                                        <MediaCard />
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={3}>
                                        <MediaCard />
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={3}>
                                        <MediaCard />
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={3}>
                                        <MediaCard />
                                    </Grid>

                                    <Grid item xs={12} md={6} lg={3}>
                                        <MediaCard />
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={3}>
                                        <MediaCard />
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={3}>
                                        <MediaCard />
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={3}>
                                        <MediaCard />
                                    </Grid>

                                    <Grid item xs={12} md={6} lg={3}>
                                        <MediaCard />
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={3}>
                                        <MediaCard />
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={3}>
                                        <MediaCard />
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={3}>
                                        <MediaCard />
                                    </Grid>

                                    <Grid item xs={12} md={6} lg={3}>
                                        <MediaCard />
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={3}>
                                        <MediaCard />
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={3}>
                                        <MediaCard />
                                    </Grid>
                                    <Grid item xs={12} md={6} lg={3}>
                                        <MediaCard />
                                    </Grid>




                                    <Fab sx={{position: 'absolute', bottom: 15, right: 15,}} aria-label='Edit' color='primary' onClick={() => this.onClickRegisterMenu()}>
                                        <RestaurantIcon />
                                    </Fab>
                                </Grid>
                               

                            </Paper>
                        </Grid>

                    </Grid>

                </Container>
            </div>
        );
    }
}

export default withRouter(Menu);