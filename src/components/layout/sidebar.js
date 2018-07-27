import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { Home, Help } from '../content';
import { Link, Route } from 'react-router-dom';
import List from '@material-ui/core/List';
import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import UserIcon from '@material-ui/icons/SupervisorAccount';
import CategoryIcon from '@material-ui/icons/CreditCard';

import categories from '../categories';
import users from '../users';
import tables from '../tables';


export default class SideBar extends React.Component {
    render() {
        const { classes, onSelected, showMenu } = this.props;
        return (
            <div>
                <Drawer variant='temporary' anchor='left' open={showMenu} onClick={() => onSelected()}>
                    <div className={classes.toolbar} >
                        <IconButton>
                            <ChevronLeftIcon />
                        </IconButton>
                        Menu
                    </div>
                    <Divider />
                    <List onClick={() => onSelected()}>
                        <ListItem className={classes.ListItem}><HomeIcon className={classes.MenuIcon} /><Link to="/" className={classes.MenuList}>Home</Link></ListItem>
                        <ListItem className={classes.ListItem}><UserIcon className={classes.MenuIcon} /><Link to="/users" className={classes.MenuList}>Users</Link></ListItem>
                        <ListItem className={classes.ListItem}><UserIcon className={classes.MenuIcon} /><Link to="/tables" className={classes.MenuList}>Tables</Link></ListItem>
                        <ListItem className={classes.ListItem}><CategoryIcon className={classes.MenuIcon} /><Link to="/categories" className={classes.MenuList}>Categories</Link></ListItem>
                        <ListItem className={classes.ListItem}><HelpIcon className={classes.MenuIcon} /><Link to="/help" className={classes.MenuList}>Help</Link></ListItem>
                    </List>
                </Drawer>
                <Route exact path="/" component={Home} />
                <Route exact path="/users" component={users} />
                <Route exact path="/tables" component={tables} />
                <Route exact path="/categories" component={categories} />
                <Route exact path="/help" component={Help} />
            </div>
        )
    }
}