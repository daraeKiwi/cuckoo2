import React, {Component} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Fab from '@mui/material/Fab';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LayoutResource from '../../layout/resource/id';
import { withRouter } from '../../layout/ui/withRouter';

import BasicTable from './basicTable';

class Diary extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        
        }
    }

    onClickRegisterDiary = () =>{
        this.props.navigate(LayoutResource.Path.RegisterDiary);
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
                                <Grid item xs={12} md={12} lg={12}>
                                    
                                
                                    <Typography component="h2" variant="h6" color="primary" gutterBottom >
                                        <BorderColorIcon sx={{position: 'relative', top: 1}} />         
                                        먹지
                                    </Typography>
                                    
                                </Grid>

                                <Grid item xs={12} md={12} lg={12} sx={{position: 'relative'}}>
                                    <BasicTable />

                                    <Fab sx={{position: 'absolute', bottom: 15, right: 15,}} aria-label='Edit' color='primary' onClick={() => this.onClickRegisterDiary()}>
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

export default withRouter(Diary);