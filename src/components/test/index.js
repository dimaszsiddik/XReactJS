import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import IconDelete from '@material-ui/icons/Delete';

import CreateUser from './create';
import EditUser from './edit';
import DeleteUser from './delete';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    "_id": 1,
                    "userName": "dzs",
                    "name": {
                        "first": "Dimas",
                        "middle": "Zapar",
                        "last": "Siddik"
                    },
                    "email": "dzs@xsis.co.id",
                    "phone": "098763",
                    "active": 1,

                },

                {
                    "_id": 2,
                    "userName": "azs",
                    "name": {
                        "first": "Abdul",
                        "middle": "Azis",
                        "last": "Alayubi"
                    },
                    "email": "dzs@xsis.co.id",
                    "phone": "098763",
                    "active": 1,

                }
            ],
            createNew: false,
            editUser: false,
            deleteUser: false,
            user: { _id: 0, userName: '', first: '', last: '', middle: '', last: '', phone: '', email: '', active: '' }

        }
    }

    handleToggle = () => {
        this.setState({
            createNew: !this.state.createNew,


        })
    }



    handleClose = () => {
        this.setState({
            createNew: false,
            editUser: false,
            deleteUser: false,
            user: { _id: 0, userName: '', first: '', middle: '', last: '', email: '', phone: '', active: '' },

        })
    }




    handleEdit = () => {
        console.log('edit')
    }
    handleDelete = (n) => {
        this.state.users.splice(n, 1);
        this.setState(this.state.users);
    }

    handleChange = name => ({ target: { value } }) => {
        this.setState({
            user: {
                ...this.state.user,
                [name]: value
            }
        })
    }

    // handleSubmit = () => {
    //     const { user, users, createNew } = this.state;

    //     const newId = parseInt(users[users.length - 1]._id) + 1;

    //     let newUser = {
    //         _id: user._id === 0 ? newId : user._id,
    //         userName: user.userName,
    //         name: {
    //             first: user.first,
    //             middle: user.middle,
    //             last: user.last
    //         },
    //         email: user.email,
    //         phone: user.phone,
    //         active: user.active
    //     }

    //     if (createNew) {
    //         users.push(createNew);
    //     } else {
    //         let idx = users.findIndex(u => u._id == newUser._id);
    //         users[idx] = newUser;
    //     }





    //     this.setState({
    //         createNew: false,
    //         editUser: false,
    //         user: { _id: 0, userName: '', first: '', middle: '', last: '', email: '', phone: '', active: '' },
    //         users: users
    //     });
    // }

    handleSubmit = () => {
        const { users, user, createNew } = this.state;

        const newId = parseInt(users[users.length - 1]._id) + 1;

        let newUser = {
            _id: user._id === 0 ? newId : user._id,
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
            users.push(newUser);
        } else {
            let idx = users.findIndex(u => u._id == newUser._id);
            users[idx] = newUser;
        }

        this.setState({
            createNew: false,
            editUser: false,
            user: { _id: 0, userName: '', first: '', middle: '', last: '', email: '', phone: '', active: '' },
            users: users
        });
    }

    handleEdit = (_id) => {
      
        const { users } = this.state;
        const user = users.find(u => u._id == _id);
       
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
        const {users, user } = this.state;
        let idx = users.findIndex(u => u._id === user._id);
        users.splice(idx, 1);
        this.setState({
            deleteUser: false,
            user: { _id: 0, userName: '', first: '', middle: '', last: '', email: '', phone: '', active: '' }
        })
    }
    render() {
        const users = this.state.users;

        return (
            <div>
                <h3>List Of Users</h3>
                <CreateUser createNew={this.state.createNew} handleToggle={this.handleToggle} handleClose={this.handleClose} handleChange={this.handleChange} user={this.state.user} handleSubmit={this.handleSubmit} />

                <EditUser editUser={this.state.editUser} handleToggle={this.handleToggle} handleClose={this.handleClose} handleChange={this.handleChange} user={this.state.user} handleSubmit={this.handleSubmit} />

                <DeleteUser deleteUser={this.state.deleteUser} handleClose={this.handleClose} user={this.state.user} handleDeleteConfirm={this.handleDeleteConfirm} />

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
                                    <TableCell >{n.active}</TableCell>
                                    <TableCell >
                                        <Button onClick={() => this.handleEdit(n._id)} variant="contained" color="primary" >Edit</Button>
                                        <Button onClick={() => this.handleDelete(n._id)}variant="contained" color="secondary" >Delete</Button>
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