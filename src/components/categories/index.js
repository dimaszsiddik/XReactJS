import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconDelete from '@material-ui/icons/Delete';
import IconEdit from '@material-ui/icons/ModeEdit';
import Checkbox from '@material-ui/core/Checkbox';


import CreateCategory from './create'

import { config } from '../configurations/config';
import axios from 'axios';

class Categories extends React.Component {

    categoryModel = {
        _id: '', initial: '', name: '',  active: true
    }
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            createNew: false,
            load: true,
            category: {}

        }
    }

    reloadCategoriesData = () => {
        axios.get(config.url + '/categories')
        .then(res => {
            this.setState({
                categories: res.data,
                category: this.categoryModel,
                load: false
            })
         
        })
        .catch((error) => {
            alert(error);
        })
    }

    componentDidMount() {
        this.reloadCategoriesData();
    }
    
    handleChange = name => ({ target: { value } }) => {
        this.setState({
            category: {
                ...this.state.category,
                [name]: value
            }
        })
    }

    handleChangeCheckBox = name => event =>{
        this.setState({
            category: {
                ...this.state.category,
                [name]: event.target.checked
            }
        })
    }

    handleToggle = () => {
        this.setState({
            createNew: !this.state.createNew,
            category: this.categoryModel

        })
    }
    handleClose = () => {
        this.setState({
            createNew: false,
            category: this.categoryModel

        })
    }

    

    render() {

        const { categories, load } = this.state;
        const { classes } = this.props;

        return (
            <div>
                <h3>List Of Categories</h3>
                <CreateCategory createNew={this.state.createNew} category={this.state.category}  handleToggle={this.handleToggle} handleClose={this.handleClose} handleChange={this.handleChange} handleChangeCheckBox={this.handleChangeCheckBox}  />
               

                <CircularProgress className={classes.progress} style={{ visibility: (load ? 'visible' : 'hidden') }} color="secondary" />

                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Initial</TableCell>
                            <TableCell >Name</TableCell>
                            
                            <TableCell >Active </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories.map(n => {
                            return (
                                <TableRow key={n._id}>
                                    <TableCell component="th" scope="row">  {n.initial} </TableCell>
                                    <TableCell >{n.name}</TableCell>
                                    <TableCell ><Checkbox checked={n.active} value="active" /></TableCell>
                                    <TableCell >
                                        <IconEdit  variant="contained" color="primary" >Edit</IconEdit>
                                        <IconDelete  variant="contained" color="secondary" >Delete</IconDelete>
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
Categories.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Categories);