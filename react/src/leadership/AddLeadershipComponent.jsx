import React, { Component } from 'react';
import {addLeadership} from "../util/APIUtils";
import {getCurrentDate} from '../util/util';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Alert from 'react-s-alert';
class AddLeadershipComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            name: '',
            designation: ''
        }
        this.saveLeadership = this.saveLeadership.bind(this);
    }

    saveLeadership = (e) => {
        e.preventDefault();
        //const file = e.target.files[0];
        let leadership = {name: this.state.name, designation: this.state.designation};
            console.log(leadership);
            addLeadership(leadership)
            .then(res => {
                console.log(JSON.stringify(res));
                Alert.success("Leadership added successfully.");
                this.setState({message : 'Leadership added successfully.'});
                this.props.history.push('/leaderships');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <Typography variant="h4" style={style}>Add Leadership</Typography>
                <form style={formContainer}>

                <TextField type="text" placeholder="name" fullWidth margin="normal" name="name" value={this.state.name} onChange={this.onChange} required/>

                <TextField type="text" placeholder="designation" fullWidth margin="normal" name="designation" value={this.state.designation} onChange={this.onChange} required/>

                <Button variant="contained" color="primary" onClick={this.saveLeadership}>Save</Button>
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

export default AddLeadershipComponent;

