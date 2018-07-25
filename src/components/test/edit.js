import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import  TextField  from '@material-ui/core/TextField';
import IconEdit from '@material-ui/icons/Edit';

export default ({ updateUser, handleToggle2, handleClose2,  handleChange, user:{userName, first, middle, last, email, phone, active} }) => {
    return <Fragment>
        <IconEdit onClick={handleToggle2}  color="primary" />
        <Dialog
            open={updateUser}
            onClose={handleClose2}
        >
            <DialogTitle id="alert-dialog-title">{"Update User"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Update this User
            </DialogContentText>
                <form>
                    <TextField label="Username" value ={userName} onChange={handleChange('userName')} margin='normal'/>
                    <br/>
                    <TextField label="First Name" value ={first} onChange={handleChange('first')} margin='normal'/>
                    <br/>
                    <TextField label="Middle Name" value ={middle} onChange={handleChange('middle')} margin='normal'/>
                    <br/>
                    <TextField label="Last Name" value ={last} onChange={handleChange('last')} margin='normal'/>
                    <br/>
                    <TextField label="Phone" value ={phone} onChange={handleChange('phone')} margin='normal'/>
                    <br/>
                    <TextField label="email" value ={email}  onChange={handleChange('email')} margin='normal'/>
                    <br/>
                    <TextField label="Active" value ={active}  onChange={handleChange('active')} margin='normal'/>
                    <br/>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose2} color="primary">
                    Cancel
            </Button>
                <Button color="primary" autoFocus>
                    Save
            </Button>
            </DialogActions>
        </Dialog>
    </Fragment>
}