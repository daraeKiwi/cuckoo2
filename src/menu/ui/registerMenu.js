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
import paella from '../../dashboard/css/img/paella.jpg';
import LayoutResource from '../../layout/resource/id';
import { withRouter } from '../../layout/ui/withRouter';

class RegisterMenu extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            menu: null,
            recipe: null,
        }
    }

    onChangeMenu = (event) => {
        this.setState({menu: event.target.value})
    }

    onChangeRecipe = (event) => {
        this.setState({recipe: event.target.value})
    }

    onBlurMenu = () => {
        const menu = this.state.menu;

        // 중복검사
        
        console.log("menuN: " + menu);
    }

    onClickRegister = () => {
        const menu = this.state.menu;
        const recipe = this.state.recipe;
    }

    onClickCancle = () => {
        this.props.navigate(LayoutResource.Path.Menu);
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

                        <Grid container spacing={2} item xs={12} md={7} lg={5} >
                            <Grid item xs={12} md={12} lg={12} >
                                
                                <Typography component="h2" variant="h6"  gutterBottom >
                                    <DiningOutlinedIcon sx={{position: 'relative', top: 1}} />         
                                    &nbsp;메뉴 등록하기
                                </Typography>
                                
                            </Grid>

                            <Grid item xs={12} md={12} lg={12}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="메뉴 이름"
                                    name="name"
                                    autoComplete="name"
                                    onChange={this.onChangeMenu}
                                    onBlur={this.onBlurMenu}
                                />
                            </Grid>

                            <Grid item xs={12} md={12} lg={12}>
                                <Button  variant="contained">이미지 불러오기</Button>
                            </Grid>
                            
                            <Grid item xs={12} md={12} lg={12}>
                                <img src={paella} />
                            </Grid>

                            <Grid item xs={12} md={12} lg={12}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="recipe"
                                    label="레시피"
                                    name="recipe"
                                    autoComplete="recipe"
                                    multiline
                                    rows={4}
                                    defaultValue=""
                                    onChange={this.onChangeRecipe}
                                />
                            </Grid>
            
                            <Grid item xs={12} md={12} lg={12}>
                       

                             
                                    <div style={{"float": "right"}}>
                                        <Button variant="contained" style={{"marginRight": "10px"}} onClick={() => this.onClickRegister()}>등록</Button>

                                        <Button variant="contained" onClick={() => this.onClickCancle()}>취소</Button>
                                    </div>
                            
                            </Grid>
                            
                        </Grid>
                        
                    </Paper>
                    
                </Container>
            </div>
        );
    }
}

export default withRouter(RegisterMenu);