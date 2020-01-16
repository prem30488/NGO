import React, { Component } from 'react';
import {addTestimonial} from "../util/APIUtils";
import {getCurrentDate} from '../util/util';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Alert from 'react-s-alert';
class AddTestimonialComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            title: '',
            description: ''
        }
        this.saveTestimonial = this.saveTestimonial.bind(this);
    }

    saveTestimonial = (e) => {
        e.preventDefault();
        //const file = e.target.files[0];
        let testimonial = {title: this.state.title, description: this.state.description};
            console.log(testimonial);
            addTestimonial(testimonial)
            .then(res => {
                console.log(JSON.stringify(res));
                Alert.success("Testimonial added successfully.");
                this.setState({message : 'Testimonial added successfully.'});
                this.props.history.push('/testimonials');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <Typography variant="h4" style={style}>Add Testimonial</Typography>
                <form style={formContainer}>

                <TextField type="text" placeholder="title" fullWidth margin="normal" name="title" value={this.state.title} onChange={this.onChange} required/>

                <TextField type="text" placeholder="description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange} required/>

                <Button variant="contained" color="primary" onClick={this.saveTestimonial}>Save</Button>
            </form>
    </div>
        );
    }
}

const formContainer = {
    display: 'flex',
    flexFlow: 'row wrap'
};

const style ={
    display: 'flex',
    justifyContent: 'center'

}

export default AddTestimonialComponent;

