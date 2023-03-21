import React, {Component} from 'react';
import { withRouter } from './withRouter';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DiningOutlinedIcon from '@mui/icons-material/DiningOutlined';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import BorderColorIcon from '@mui/icons-material/BorderColor';

import LayoutResource from '../resource/id';

class mainMenuList extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          
        }
    }

    onClickLink = (path) => {
        this.props.navigate(path);
    }

    render() {
        return (
            <React.Fragment>
                <ListItemButton onClick={() => this.onClickLink(LayoutResource.Path.Dashboard)}>
                    <ListItemIcon>
                        <LunchDiningOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="오늘은 뭐 먹을까" />
                </ListItemButton>
                <ListItemButton onClick={() => this.onClickLink(LayoutResource.Path.Diary)}>
                    <ListItemIcon>
                        <BorderColorIcon />
                    </ListItemIcon>
                    <ListItemText primary="먹지" />
                </ListItemButton>
                <ListItemButton onClick={() => this.onClickLink(LayoutResource.Path.Menu)}>
                    <ListItemIcon>
                        <DiningOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="메뉴" />
                </ListItemButton>
            </React.Fragment>
        );
    }
}

export default withRouter(mainMenuList);
