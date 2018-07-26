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
    render() {

        const { categories, load } = this.state;
        const { classes } = this.props;

        return (
            <div>
                <h3>List Of Categories</h3>
               

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
                                    <TableCell >{n.active}</TableCell>
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