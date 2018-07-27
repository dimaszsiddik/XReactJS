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


// import CreateCategory from './create';
// import EditCategory from './edit';
// import DeleteCategory from './delete';

import { config } from '../configurations/config';
import axios from 'axios';

class Products extends React.Component {

    productModel = {
        _id: '', initial: '', name: '', price:'', active: true, categoryId: ''
    }
    constructor(props) {
        super(props);
        this.state = {
            // categories: [],
            createNew: false,
            load: true,
            // category: {}

        }
    }

    // reloadCategoriesData = () => {
    //     axios.get(config.url + '/categories')
    //         .then(res => {
    //             this.setState({
    //                 categories: res.data,
    //                 category: this.categoryModel,
    //                 createNew: false,
    //                 editCategory: false,
    //                 deleteCategory: false,
    //                 load: false
    //             })

    //         })
    //         .catch((error) => {
    //             alert(error);
    //         })
    // }

    // componentDidMount() {
    //     this.reloadCategoriesData();
    // }

    // handleChange = name => ({ target: { value } }) => {
    //     this.setState({
    //         category: {
    //             ...this.state.category,
    //             [name]: value
    //         }
    //     })
    // }

    // handleChangeCheckBox = name => event => {
    //     this.setState({
    //         category: {
    //             ...this.state.category,
    //             [name]: event.target.checked
    //         }
    //     })
    // }

    // handleToggle = () => {
    //     this.setState({
    //         createNew: !this.state.createNew,
    //         category: this.categoryModel

    //     })
    // }
    // handleClose = () => {
    //     this.setState({
    //         createNew: false,
    //         editCategory: false,
    //         deleteCategory: false,
    //         category: this.categoryModel

    //     })
    // }

    // handleSubmit = () => {
    //     const { category, createNew } = this.state;

    //     let newCategory = {
    //         initial: category.initial,
    //         name: category.name,
    //         active: category.active
    //     }

    //     if (createNew) {
    //         axios.post(config.url + '/categories', newCategory)
    //             .then(res => {
    //                 this.reloadCategoriesData();
    //                 alert('has been saved');
    //             })
    //             .catch((error) => {
    //                 alert(error);
    //             })
    //     } else {
    //         axios.put(config.url + '/categories/' + category._id, newCategory)
    //             .then(res => {
    //                 this.reloadCategoriesData();
    //                 alert('has been update');
    //             })
    //             .catch((error) => {
    //                 alert(error);
    //             })
    //     }

    // }

    // handleEdit = (_id) => {

    //     const { categories } = this.state;
    //     const category = categories.find(u => u._id === _id);

    //     this.setState({
    //         editCategory: true,
    //         category: {
    //             _id: category._id,
    //             initial: category.initial,
    //             name: category.name,

    //             active: category.active
    //         }
    //     })
    // }

    // handleDelete = (_id) => {

    //     const { categories } = this.state;
    //     const category = categories.find(u => u._id === _id);

    //     this.setState({
    //         deleteCategory: true,
    //         category: {
    //             _id: category._id,
    //             initial: category.initial,
    //             name: category.name,
    //             active: category.active
    //         }
    //     })
    // }  
    
    // handleDeleteConfirm = () => {
    //     const { category } = this.state;
    //     axios.delete(config.url + '/categories/' + category._id)
    //     .then(res =>{
    //         this.reloadCategoriesData();
    //         alert('has been deleted');
    //     })
    //     .catch((error) => {
    //         alert(error);
    //     })
        
    // }

    render() {

        const { categories, load } = this.state;
        const { classes } = this.props;

        return (
            <div>
                <h3>List Of Products</h3>
                {/* <CreateCategory createNew={this.state.createNew} category={this.state.category} handleToggle={this.handleToggle} handleClose={this.handleClose} handleChange={this.handleChange} handleChangeCheckBox={this.handleChangeCheckBox} handleSubmit={this.handleSubmit} /> */}


                {/* <EditCategory editCategory={this.state.editCategory} handleToggle={this.handleToggle} handleClose={this.handleClose} handleChange={this.handleChange} handleChangeCheckBox={this.handleChangeCheckBox} category={this.state.category} handleSubmit={this.handleSubmit} /> */}

                 {/* <DeleteCategory deleteCategory={this.state.deleteCategory}  handleClose={this.handleClose}   category={this.state.category} handleDeleteConfirm={this.handleDeleteConfirm}  /> */}

                <CircularProgress className={classes.progress} style={{ visibility: (load ? 'visible' : 'hidden') }} color="secondary" />

                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Initial</TableCell>
                            <TableCell >Name</TableCell>
                            <TableCell >Price</TableCell>
                            <TableCell >Category Id </TableCell>
                            <TableCell >Active </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {categories.map(n => {
                            return (
                                <TableRow key={n._id}>
                                    <TableCell component="th" scope="row">  {n.initial} </TableCell>
                                    <TableCell >{n.name}</TableCell>
                                    <TableCell ><Checkbox checked={n.active} value="active" /></TableCell>
                                    <TableCell >
                                        <IconEdit onClick={() => this.handleEdit(n._id)} variant="contained" color="primary" >Edit</IconEdit>
                                        <IconDelete onClick={() => this.handleDelete(n._id)} variant="contained" color="secondary" >Delete</IconDelete>
                                    </TableCell>

                                </TableRow>
                            );
                        })} */}
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
Products.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Products);