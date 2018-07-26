import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import  TextField  from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


export default ({ editUser, handleClose, handleSubmit, handleChange,handleChangeCheckBox, user:{userName, first, middle, last, email, phone, active} }) => {
    return <Fragment>

        <Dialog
            open={editUser}
            onClose={handleClose}
        >
            <DialogTitle id="alert-dialog-title">{"Update User"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Update this User
            </DialogContentText>
                <form>
                    <TextField label="Username" value ={userName} onChange={handleChange('userName')} margin='normal'/>
                    &nbsp;
                    <TextField label="First Name" value ={first} onChange={handleChange('first')} margin='normal'/>
                    <br/>
                    <TextField label="Middle Name" value ={middle} onChange={handleChange('middle')} margin='normal'/>
                    &nbsp;
                    <TextField label="Last Name" value ={last} onChange={handleChange('last')} margin='normal'/>
                    <br/>
                    <TextField label="Phone" value ={phone} onChange={handleChange('phone')} margin='normal'/>
                    &nbsp;
                    <TextField label="email" value ={email}  onChange={handleChange('email')} margin='normal'/>
                    <br/>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={active}
                                onChange={handleChangeCheckBox('active')}
                                value="active"
                                color="primary"
                            />
                        }
                        label="Active"
                    />
                    <br/>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
            </Button>
                <Button  onClick={handleSubmit} color="primary" autoFocus>
                    Save
            </Button>
            </DialogActions>
        </Dialog>
    </Fragment>
}