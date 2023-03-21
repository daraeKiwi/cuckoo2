import React, {Component} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';

import {AccountController} from '../services/accountController';
import AccountResource from '../resource/id';

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
  
export default  class Register extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          doubleChk: false,
          error: {
            email: null,
            pw: null,
          }
        }

        this.props = props;
    }

    onChangeEmail = (event) => {
      this.setState({email: event.target.value})
    };

    onClickLogin = () => {
      this.props.onChangeMode(AccountResource.AccountMode.Login);
    }

    onClickDoubleCheck = async () => {
        const email = this.state.email;
        
        // 빈값 체크
        // 이메일 형식 체크

        // 중복 체크
        //this.onDoubleCheck(email);
        const result = await AccountController.doubleCheck(email);

        console.log(result);
    }

    async onDoubleCheck(email) {
      const result = await AccountController.doubleCheck(email);

      

      console.log(result);
    }

    render() {
      return (

        <Grid container>
          <Grid xs={0} md={1}/>
          <Grid xs={12} md={10}>
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
              <PersonIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
              회원가입
            </Typography>

            <Box sx={{ mt: 1 }}>
              
            <Grid container alignItems="center" sx={{ mt: 2 }}>
              <Grid xs={9} item>
                <TextField
                  id="email"
                  label="이메일 주소"
                  placeholder="email"
                  variant="standard"
                  onChange={this.onChangeEmail}
                  fullWidth
                  required
                />
              </Grid>
           
              <Grid container xs={3} justifyContent="flex-end">
                <Button
                  variant="contained"
                  sx={{ width: '15ch', height: '6ch'}}
                  onClick={this.onClickDoubleCheck}
                >
                  중복확인
                </Button>
              </Grid>
            </Grid>
              <TextField
                  id="name"
                  label="이름"
                  placeholder="name"
                  variant="standard"
                  fullWidth
                  required
                  sx={{ mt: 2 }}
                />
          
              <TextField
                id="pw"
                label="비밀번호 입력"
                type="password"
                variant="standard"
                placeholder="비밀번호"
                fullWidth
                required
                sx={{ mt: 2 }}
              />

              <TextField
                id="pwConf"
                label="비밀번호 확인"
                type="password"
                variant="standard"
                placeholder="비밀번호 확인"
                fullWidth
                required
                sx={{ mt: 2 }}
              />
              <Grid container justifyContent="center" xs={12} >
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, height: '6ch' }}
                >
                  가입
                </Button>
              </Grid>
              
              <Grid container>

                <Grid item xs>
                  
                </Grid>

                <Grid item>
                  <Link onClick={this.onClickLogin}>
                    {"로그인 화면으로 돌아가기"}
                  </Link>
                </Grid>

              </Grid>
              
              <Copyright sx={{ mt: 5 }} />

            </Box>
          </Box>
          </Grid>
          <Grid xs={0} md={1}/>
        </Grid>
      );
    }
}