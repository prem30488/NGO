import React, { Component } from 'react'
import {updateAward,fetchAwardById} from "../util/APIUtils";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {getCurrentDate} from '../util/util';
import Alert from 'react-s-alert';
class EditAwardComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            title: '',
            description: ''
        }
        this.saveAward = this.saveAward.bind(this);
        this.loadAward = this.loadAward.bind(this);
    }

    componentDidMount() {
        this.loadAward();
    }

    loadAward() {
        fetchAwardById(window.localStorage.getItem("awardId"))
            .then((res) => {
                console.log(res);
                let award = res;
                this.setState({
                    id: award.id,
                    title: award.title,
                    description: award.description
                })
                console.log("award :",award);
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveAward = (e) => {
        e.preventDefault();
        //let award = {id: this.state.id, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, salary: this.state.salary};
        let award = {id: this.state.id,title: this.state.title, description: this.state.description}
            console.log(JSON.stringify(award));
        updateAward(award)
            .then(res => {
                Alert.success("Award updated successfully.");
                this.setState({message : 'Award updated successfully.'});
                this.props.history.push('/awards');
            });
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Edit Award</Typography>
                <form>

                        <TextField type="text" placeholder="title" fullWidth margin="normal" name="title" value={this.state.title} onChange={this.onChange} required/>

                        <TextField type="text" placeholder="description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange} required/>

                        <Button variant="contained" color="primary" onClick={this.saveAward}>Save</Button>

                </form>
            </div>
        );
    }
}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default EditAwardComponent;