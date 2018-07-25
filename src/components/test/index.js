import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import IconDelete from '@material-ui/icons/Delete';

import Create from './create';
import Edit from './edit';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    "_id": "1",
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
                    "_id": "2",
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
         
            user:{userName:'', first:'',last:'',middle:'',last:'', phone:'',email:'', active:''}
           
        }
    }

    handleToggle = () => {
        this.setState({
            createNew: !this.state.createNew,
           
           
        })
    }

    handleToggle2 = () => {
        this.setState({
            updateUser: !this.state.updateUser,
           
           
        })
    }

    handleClose = () => {
        this.setState({
            createNew: !this.state.createNew,
       
        })
    }

    
    handleClose2 = () => {
        this.setState({
            updateUser: !this.state.updateUser,
       
        })
    }

    handleEdit = () => {
        console.log('edit')
    }
    handleDelete =(n) => {
        this.state.users.splice(n,1);
        this.setState(this.state.users);
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
            userName : user.userName,
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
                                    <TableCell ><Edit updateUser={this.state.updateUser} handleToggle2={this.handleToggle2} handleClose2={this.handleClose2}  handleChange={this.handleChange} user={this.state.user} handleSubmit={this.handleSubmit}/>&nbsp;&nbsp;&nbsp;&nbsp;<IconDelete onClick={()=> this.handleDelete(users.indexOf(n))} color="secondary"/></TableCell>
                               
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        )
    }
}