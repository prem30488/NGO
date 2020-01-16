import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import {getTestimonialList} from '../util/APIUtils'

class Testimonial extends Component {

    constructor(props) {
        super(props)
        this.state = {
            testimonials: [],
            message: null
        }
        this.deleteTestimonial = this.deleteTestimonial.bind(this);
        this.editTestimonial = this.editTestimonial.bind(this);
        this.addTestimonial = this.addTestimonial.bind(this);
        this.reloadTestimonialList = this.reloadTestimonialList.bind(this);
    }

    componentDidMount() {
        this.reloadTestimonialList();
    }

    reloadTestimonialList() {
      getTestimonialList()
            .then((res) => {
                this.setState({testimonials: res.content})
            });
    }

    deleteTestimonial(testimonialId) {
        // ApiService.deleteTestimonial(testimonialId)
        //    .then(res => {
        //        this.setState({message : 'Testimonial deleted successfully.'});
        //        this.setState({testimonials: this.state.testimonials.filter(testimonial => testimonial.id !== testimonialId)});
        //    })
    }

    editTestimonial(id) {
        window.localStorage.setItem("testimonialId", id);
        this.props.history.push('/edit-testimonial');
    }

    addTestimonial() {
        window.localStorage.removeItem("testimonialId");
        this.props.history.push('/add-testimonial');
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Testimonial Details</Typography>
                <Button variant="contained" color="primary" onClick={() => this.addTestimonial()}>
                    Add Testimonial
                </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Testimonial Title</TableCell>
                            <TableCell align="right">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.testimonials.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right" onClick={() => this.editTestimonial(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="right" onClick={() => this.deleteTestimonial(row.id)}><DeleteIcon /></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
        );
    }

}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default Testimonial;