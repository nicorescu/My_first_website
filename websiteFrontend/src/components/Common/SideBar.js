import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

import FaceIcon from '@material-ui/icons/Face';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';

function ListItemLink(props) {
    return <ListItem button component={RouterLink} {...props} />
}

class SideBar extends Component {
    render() {
        return (
            <List>
                <ListItemLink button to="/admin">
                    <ListItemIcon>
                        <DashboardIcon></DashboardIcon>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard">
                    </ListItemText>
                </ListItemLink>
                <ListItemLink button to="/admin/Posts">
                    <ListItemIcon>
                        <FileCopyIcon></FileCopyIcon>
                    </ListItemIcon>
                    <ListItemText primary="Posts">
                    </ListItemText>
                </ListItemLink>
                    <ListItemLink button to="/admin/users">
                        <ListItemIcon>
                            <FaceIcon></FaceIcon>
                        </ListItemIcon>
                        <ListItemText primary="Users">
                        </ListItemText>
                    </ListItemLink>
            </List>
        );
    }
}

export default SideBar;