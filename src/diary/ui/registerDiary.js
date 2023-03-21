import React, {Component} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Fab from '@mui/material/Fab';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DiningOutlinedIcon from '@mui/icons-material/DiningOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import Rating from '@mui/material/Rating';
import paella from '../../dashboard/css/img/paella.jpg';
import LayoutResource from '../../layout/resource/id';
import { withRouter } from '../../layout/ui/withRouter';
import { ThirtyFpsSelect } from '@mui/icons-material';

class RegisterDiary extends Component {
    // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
    static top100Films = [
        { label: '햄버거', year: 1994 },
        { label: '치킨', year: 1972 },
        { label: '피자', year: 1974 },
    ];

    constructor(props) {
        super(props);
        
        this.state = {
            value: 2,
        }
    }

    onClickCancle = () => {
        this.props.navigate(LayoutResource.Path.Diary);
    }

    render() {

        return (
            <div>
                <Container maxWidth="100" sx={{ mt: 3 }}>

                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            
                        }} >

                        <Grid container spacing={2} item xs={12} md={7} lg={4} >
                            <Grid item xs={12} md={12} lg={12} >
                                
                                <Typography component="h2" variant="h6"  gutterBottom >
                                    <DiningOutlinedIcon sx={{position: 'relative', top: 1}} />         
                                    &nbsp;먹지 쓰기
                                </Typography>
                                
                            </Grid>

                            <Grid item xs={12} md={12} lg={12}>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={RegisterDiary.top100Films}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="메뉴" />}
                                    />
                            </Grid>

                            <Grid item xs={12} md={12} lg={12}>
                                <img src={paella} />
                            </Grid>

                            <Grid item xs={12} md={12} lg={12}>
                                <Typography component="legend">만족도</Typography>
                                <Rating
                                    name="simple-controlled"
                                    value={this.state.value}
                                    onChange={(event, newValue) => {
                                        this.setState({value: newValue});
                                    }}
                                />
                            </Grid>
            
                            <Grid item xs={12} md={12} lg={12}>
                                <Button variant="contained" style={{"marginRight": "10px"}}>등록</Button>
                                <Button variant="contained" onClick={() => this.onClickCancle()}>취소</Button>
                            </Grid>
                            
                        </Grid>
                        
                    </Paper>
                    
                </Container>
            </div>
        );
    }
}

export default withRouter(RegisterDiary);