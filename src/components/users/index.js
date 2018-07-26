import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconDelete from '@material-ui/icons/Delete';
import IconEdit from '@material-ui/icons/ModeEdit';
import Checkbox from '@material-ui/core/Checkbox';


import CreateUser from './create';
import EditUser from './edit';
import DeleteUser from './delete';


import { config } from '../configurations/config';
import axios from 'axios';

class Users extends React.Component {

    userModel = {
        _id: '', userName: '', first: '',  middle: '', last: '', phone: '', email: '', active: true
    }

    constructor(props) {
        super(props);
        this.state = {
            users: [

            ],
            createNew: false,
            editUser: false,
            deleteUser: false,
            load: true,
            user: {}

        }
    }
    reloadUserData = () => {
        axios.get(config.url + '/users')
        .then(res => {
            this.setState({
                users: res.data,
                createNew: false,
                editUser:false,
                deleteUser:false,
                user: this.userModel,
                load: false
            })
         
        })
        .catch((error) => {
            alert(error);
        })
    }

    componentDidMount() {
        this.reloadUserData();
    }

    handleToggle = () => {
        this.setState({
            createNew: !this.state.createNew,
            user: this.userModel

        })
    }



    handleClose = () => {
        this.setState({
            createNew: false,
            editUser: false,
            deleteUser: false,
            user: this.userModel

        })
    }




    handleChange = name => ({ target: { value } }) => {
        this.setState({
            user: {
                ...this.state.user,
                [name]: value
            }
        })
    }

    handleChangeCheckBox = name => event =>{
        this.setState({
            user: {
                ...this.state.user,
                [name]: event.target.checked
            }
        })
    }


    handleSubmit = () => {
        const { users, user, createNew } = this.state;



        let newUser = {

            userName: user.userName,
            name: {
                first: user.first,
                middle: user.middle,
                last: user.last
            },
            email: user.email,
            phone: user.phone,
            active: user.active
        }

        if (createNew) {
           //console.log(newUser)
            axios.post(config.url + '/users', newUser)
                .then(res => {
                    this.reloadUserData();
                    alert('has been saved');

                })
                .catch((error) => {
                    alert(error);
                })

        } else {
            axios.put(config.url + '/users/' + user._id, newUser)
                .then(res =>{
                    this.reloadUserData();
                    alert('has been update');
                })
                .catch((error) => {
                    alert(error);
                })
        }

    }

    handleEdit = (_id) => {

        const { users } = this.state;
        const user = users.find(u => u._id === _id);

        this.setState({
            editUser: true,
            user: {
                _id: user._id,
                userName: user.userName,
                first: user.name.first,
                middle: user.name.middle,
                last: user.name.last,
                email: user.email,
                phone: user.phone,
                active: user.active
            }
        })
    }
    handleDelete = (_id) => {

        const { users } = this.state;
        const user = users.find(u => u._id === _id);

        this.setState({
            deleteUser: true,
            user: {
                _id: user._id,
                userName: user.userName,
                first: user.name.first,
                middle: user.name.middle,
                last: user.name.last,
                email: user.email,
                phone: user.phone,
                active: user.active
            }
        })
    }
    handleDeleteConfirm = () => {
        const { user } = this.state;
        axios.delete(config.url + '/users/' + user._id)
        .then(res =>{
            this.reloadUserData();
            alert('has been deleted');
        })
        .catch((error) => {
            alert(error);
        })
        
    }
    render() {
        const { users, load } = this.state;
        const { classes } = this.props;

        return (
            <div>
                <h3>List Of Users</h3>
                <CreateUser createNew={this.state.createNew} handleToggle={this.handleToggle} handleClose={this.handleClose} handleChange={this.handleChange} handleChangeCheckBox={this.handleChangeCheckBox} user={this.state.user}  handleSubmit={this.handleSubmit} />

                <EditUser editUser={this.state.editUser} handleToggle={this.handleToggle} handleClose={this.handleClose} handleChange={this.handleChange} handleChangeCheckBox={this.handleChangeCheckBox} user={this.state.user} handleSubmit={this.handleSubmit} />

                <DeleteUser deleteUser={this.state.deleteUser} handleClose={this.handleClose} user={this.state.user} handleDeleteConfirm={this.handleDeleteConfirm} />

                <CircularProgress className={classes.progress} style={{ visibility: (load ? 'visible' : 'hidden') }} color="secondary" />

                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Username</TableCell>
                            <TableCell >Name</TableCell>
                            <TableCell >Email </TableCell>
                            <TableCell >Telp </TableCell>
                            <TableCell >Active </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(n => {
                            return (
                                <TableRow key={n._id}>
                                    <TableCell component="th" scope="row">  {n.userName} </TableCell>
                                    <TableCell >{
                                        (n.name.first ? n.name.first + " " : " ") +
                                        (n.name.middle ? n.name.middle + " " : " ") +
                                        (n.name.last ? n.name.last + " " : " ")
                                    }</TableCell>
                                    <TableCell >{n.email}</TableCell>
                                    <TableCell >{n.phone}</TableCell>
                                    <TableCell > <Checkbox checked={n.active} value="active" /></TableCell>
                                    <TableCell >
                                        <IconEdit onClick={() => this.handleEdit(n._id)} variant="contained" color="primary" >Edit</IconEdit>
                                        <IconDelete onClick={() => this.handleDelete(n._id)} variant="contained" color="secondary" >Delete</IconDelete>
                                    </TableCell>

                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        )
    }
}

const styles = theme => ({
    progress: {
        position: 'absolute',
        alignSelf: 'center',
        top: '50%',
        left: '50%',
        alignItem: 'center',
    },
});
Users.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Users);