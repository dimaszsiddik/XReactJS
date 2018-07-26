import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default ({ deleteCategory,handleDeleteConfirm,  handleClose,   category: { initial, name, active }}) => {
    return <Fragment>
    
        <Dialog
            open={deleteCategory}
            onClose={handleClose}
        >
            <DialogTitle id="alert-dialog-title">{"Are you sure to delete this ?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    
            </DialogContentText>
                <form>
                    <TextField label="Initial" value={initial} margin='normal' disabled/>
                    &nbsp;
                    <TextField label="Name" value={name}  margin='normal' disabled/>
                    <br />
                    
                    {/* <TextField label="Active" value ={active}  onChange={handleChange('active')} margin='normal'/> */}
                    <FormControlLabel
                        control={
                            <Switch
                                checked={active}
                               
                                value="active"
                                color="primary"
                                disabled
                            />
                        }
                        label="Active"
                    />
                    <br />
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