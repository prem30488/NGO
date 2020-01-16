import React, { Component } from 'react'
import {updateLeadership,fetchLeadershipById} from "../util/APIUtils";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {getCurrentDate} from '../util/util';
import Alert from 'react-s-alert';
class EditLeadershipComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            name: '',
            designation: ''
        }
        this.saveLeadership = this.saveLeadership.bind(this);
        this.loadLeadership = this.loadLeadership.bind(this);
    }

    componentDidMount() {
        this.loadLeadership();
    }

    loadLeadership() {
        fetchLeadershipById(window.localStorage.getItem("leadershipId"))
            .then((res) => {
                console.log(res);
                let leadership = res;
                this.setState({
                    id: leadership.id,
                    name: leadership.name,
                    designation: leadership.designation
                })
                console.log("leadership :",leadership);
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveLeadership = (e) => {
        e.preventDefault();
        //let leadership = {id: this.state.id, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, salary: this.state.salary};
        let leadership = {id: this.state.id,name: this.state.name, designation: this.state.designation}
            console.log(JSON.stringify(leadership));
        updateLeadership(leadership)
            .then(res => {
                Alert.success("Leadership updated successfully.");
                this.setState({message : 'Leadership updated successfully.'});
                this.props.history.push('/leaderships');
            });
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Edit Leadership</Typography>
                <form>

                        <TextField type="text" placeholder="name" fullWidth margin="normal" name="name" value={this.state.name} onChange={this.onChange} required/>

                        <TextField type="text" placeholder="designation" fullWidth margin="normal" name="designation" value={this.state.designation} onChange={this.onChange} required/>

                        <Button variant="contained" color="primary" onClick={this.saveLeadership}>Save</Button>

                </form>
            </div>
        );
    }
}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default EditLeadershipComponent;