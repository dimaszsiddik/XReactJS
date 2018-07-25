import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconEdit from '@material-ui/icons/Edit';
import IconDelete from '@material-ui/icons/Delete';

import Create from './create';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    "_id": "5b55a54a6fd1441c08bac91c",
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
                    "_id": "5b55a54a6fd1441c08bac91c",
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
            user:{userName:'', first:'',last:'',middle:'',last:'', phone:'',email:'', active:''},
            
        }
    }

    handleToggle = () => {
        this.setState({
            createNew: !this.state.createNew
        })
    }

    handleClose = () => {
        this.setState({
            createNew: !this.state.createNew
        })
    }
    handleEdit = () => {
        console.log('edit')
    }

    handleChange= name => ({target: {value}}) =>{
        this.setState({
            user:{
                ...this.state.user,
                [name]: value
            }
        })
    }

    handleSubmit = () => {
        const { user } = this.state;
        let newUser = {
            username : user.userName,
            name: {
                first : user.first,
                middle : user.middle,
                last : user.last
            },
            email: user.email,
            phone: user.phone,
            active: user.active
        }
        
      

        let users = this.state.users;
        users.push(newUser);

        this.setState({
            createNew: false,
            user: {userName:'', first:'', middle:'', last:'', email:'', phone:'', active:''},
            users: users
        });
    }
    render() {
        const users = this.state.users;

        return (
            <div>
                <h3>List Of Users</h3>
                <Create createNew={this.state.createNew} handleToggle={this.handleToggle} handleClose={this.handleClose}  handleChange={this.handleChange} user={this.state.user} handleSubmit={this.handleSubmit}/>
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
                                    <TableCell >{(n.name.first ? n.name.first + " ":" ")+(n.name.middle ? n.name.middle + " ":" ")+(n.name.last ? n.name.last + " ":" ")}</TableCell>
                                    <TableCell >{n.email}</TableCell>
                                    <TableCell >{n.phone}</TableCell>
                                    <TableCell >{n.active}</TableCell>
                                    <TableCell ><IconEdit onClick={()=> this.handleEdit()}/>&nbsp;&nbsp;&nbsp;&nbsp;<IconDelete/></TableCell>
                               
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        )
    }
}