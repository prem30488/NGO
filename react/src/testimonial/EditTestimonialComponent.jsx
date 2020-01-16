import React, { Component } from 'react'
import {updateTestimonial,fetchTestimonialById} from "../util/APIUtils";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {getCurrentDate} from '../util/util';
import Alert from 'react-s-alert';
class EditTestimonialComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            title: '',
            description: ''
        }
        this.saveTestimonial = this.saveTestimonial.bind(this);
        this.loadTestimonial = this.loadTestimonial.bind(this);
    }

    componentDidMount() {
        this.loadTestimonial();
    }

    loadTestimonial() {
        fetchTestimonialById(window.localStorage.getItem("testimonialId"))
            .then((res) => {
                console.log(res);
                let testimonial = res;
                this.setState({
                    id: testimonial.id,
                    title: testimonial.title,
                    description: testimonial.description
                })
                console.log("testimonial :",testimonial);
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveTestimonial = (e) => {
        e.preventDefault();
        //let testimonial = {id: this.state.id, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, salary: this.state.salary};
        let testimonial = {id: this.state.id,title: this.state.title, description: this.state.description}
            console.log(JSON.stringify(testimonial));
        updateTestimonial(testimonial)
            .then(res => {
                Alert.success("Testimonial updated successfully.");
                this.setState({message : 'Testimonial updated successfully.'});
                this.props.history.push('/testimonials');
            });
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Edit Testimonial</Typography>
                <form>

                        <TextField type="text" placeholder="title" fullWidth margin="normal" name="title" value={this.state.title} onChange={this.onChange} required/>

                        <TextField type="text" placeholder="description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange} required/>

                        <Button variant="contained" color="primary" onClick={this.saveTestimonial}>Save</Button>

                </form>
            </div>
        );
    }
}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default EditTestimonialComponent;