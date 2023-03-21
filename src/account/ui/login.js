import React, {Component} from 'react';
import { withRouter } from '../../layout/ui/withRouter';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import {AccountController} from '../services/accountController';
import AccountResource from '../resource/id';
import LayoutResource from '../../layout/resource/id';

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
  
class AccountLayout extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          email: "",
          pw: "",
          error: {
            email: null,
            pw: null,
          }
        }

        
    }

    onClickLogin = () => {
      this.props.navigate(LayoutResource.Path.Dashboard);
      
      /*
      let email = this.state.email;
      let pw = this.state.pw;
      let error = this.state.error;

      if (email === "") {
        error.email = "이메일 주소를 입력해주세요.";
        error.pw = null;
        
        this.setState({error: error});
        return;
      }

      if (pw === "") {
        error.email = null;
        error.pw = "비밀번호를 입력해주세요.";
        
        this.setState({error: error});
        return;
      }

      error.email = null;
      error.pw = null;
      this.setState({error: error});

      this.login(email, pw);
      */
    }

    async login(email, pw) {
      const result = await AccountController.login(email, pw);
      
      if (result !== null && result !== undefined)
        alert(result.message);

    }

    onChangeEmail = (event) => {
      this.setState({email: event.target.value})
    };

    onChangePW = (event) => {
      this.setState({pw: event.target.value})
    };
    
    displayEmailUI = () => {
      let error = this.state.error;
      let displayEmailUI = [];

      if (error.email !== null) {
        displayEmailUI.push(
          
          <TextField
            margin="normal"
            error
            fullWidth
            id="email"
            label="이메일 주소 입력"
            name="email"
            autoComplete="email"
            onChange={this.onChangeEmail}
            autoFocus
            helperText={error.email}
          />
          
         /*
          <TextField
              id="email"
              label="이메일 주소"
              placeholder="email"
              variant="standard"
              onChange={this.onChangeEmail}
              fullWidth
              required
              helperText={error.email}
            />
            */
        );
      } else {
        displayEmailUI.push(
          
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="이메일 주소 입력"
            name="email"
            autoComplete="email"
            onChange={this.onChangeEmail}
            autoFocus
          />
          
         /*
          <TextField
              id="email"
              label="이메일 주소"
              placeholder="email"
              variant="standard"
              onChange={this.onChangeEmail}
              fullWidth
              required
            />
            */
        );
      }

      return displayEmailUI;
    }

    displayPwdUI = () => {
      let error = this.state.error;
      let displayPwdUI = [];

      if (error.pw !== null) {
        displayPwdUI.push(
          <TextField
            margin="normal"
            error
            fullWidth
            name="password"
            label="비밀번호 입력"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={this.onChangePW}
            helperText={error.pw}
            autoFocus
          />
        );
      } else {
        displayPwdUI.push(
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호 입력"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={this.onChangePW}
          />
        );
      }

      return displayPwdUI;
    }

    onClickRegister = () => {
      this.props.onChangeMode(AccountResource.AccountMode.Register);
    }

    render() {
      const displayEmailUI = this.displayEmailUI();
      const displayPwdUI = this.displayPwdUI();

      return (
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
              로그인
            </Typography>

            <Box noValidate sx={{ mt: 1 }}>

              <Grid container xs={12}>

                {displayEmailUI}
                
                {displayPwdUI}
        
                
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="로그인 유지"
                />
              </Grid>

              <Button
                onClick={this.onClickLogin}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                확인
              </Button>

              <Grid container>

                <Grid item>
                  <Link onClick={this.onClickRegister}>
                    {"회원가입"}
                  </Link>
                </Grid>

              </Grid>

              <Copyright sx={{ mt: 5 }} />

            </Box>
          </Box>
      );
    }
}

export default withRouter(AccountLayout);