import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import  TextField  from '@material-ui/core/TextField';

export default ({ createNew, handleToggle, handleClose, handleSubmit, handleChange, user:{userName, first, middle, last, email, phone, active} }) => {
    return <Fragment>
        <Button onClick={handleToggle} variant="contained" color="primary" >Create</Button>
        <Dialog
            open={createNew}
            onClose={handleClose}
        >
            <DialogTitle id="alert-dialog-title">{"New User"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Please fill out the form below
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
                <Button onClick={handleClose} color="primary">
                    Cancel
            </Button>
                <Button onClick={handleSubmit} color="primary" autoFocus>
                    Save
            </Button>
            </DialogActions>
        </Dialog>
    </Fragment>
}