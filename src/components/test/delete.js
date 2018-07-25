import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import  TextField  from '@material-ui/core/TextField';

export default ({ deleteUser, handleClose, handleDeleteConfirm, user:{userName, first, middle, last, email, phone, active} }) => {
    return <Fragment>

        <Dialog
            open={deleteUser}
            onClose={handleClose}
        >
            <DialogTitle id="alert-dialog-title">{"Delete"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure to delete ?
            </DialogContentText>
                <form>
                    <TextField label="Username" value ={userName}  margin='normal' disabled={true}/>
                    &nbsp;
                    <TextField label="First Name" value ={first}  margin='normal' disabled={true}/>
                    <br/>
                    <TextField label="Middle Name" value ={middle}  margin='normal' disabled={true}/>
                    &nbsp;
                    <TextField label="Last Name" value ={last}  margin='normal' disabled={true}/>
                    <br/>
                    <TextField label="Phone" value ={phone}  margin='normal' disabled={true}/>
                    &nbsp;
                    <TextField label="email" value ={email}   margin='normal' disabled={true}/>
                    <br/>
                    <TextField label="Active" value ={active}   margin='normal' disabled={true}/>
                    <br/>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
            </Button>
                <Button onClick={handleDeleteConfirm} color="primary" autoFocus>
                    Delete
            </Button>
            </DialogActions>
        </Dialog>
    </Fragment>
}