import React, { Component } from 'react'
import {updateMission,fetchMissionById} from "../util/APIUtils";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {getCurrentDate} from '../util/util';
import Alert from 'react-s-alert';
class EditMissionComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            title: '',
            description: ''
        }
        this.saveMission = this.saveMission.bind(this);
        this.loadMission = this.loadMission.bind(this);
    }

    componentDidMount() {
        this.loadMission();
    }

    loadMission() {
        fetchMissionById(window.localStorage.getItem("missionId"))
            .then((res) => {
                console.log(res);
                let mission = res;
                this.setState({
                    id: mission.id,
                    title: mission.title,
                    description: mission.description
                })
                console.log("mission :",mission);
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveMission = (e) => {
        e.preventDefault();
        //let mission = {id: this.state.id, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, age: this.state.age, salary: this.state.salary};
        let mission = {id: this.state.id,title: this.state.title, description: this.state.description}
            console.log(JSON.stringify(mission));
        updateMission(mission)
            .then(res => {
                Alert.success("Mission updated successfully.");
                this.setState({message : 'Mission updated successfully.'});
                this.props.history.push('/missions');
            });
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Edit Mission</Typography>
                <form>

                        <TextField type="text" placeholder="title" fullWidth margin="normal" name="title" value={this.state.title} onChange={this.onChange} required/>

                        <TextField type="text" placeholder="description" fullWidth margin="normal" name="description" value={this.state.description} onChange={this.onChange} required/>

                        <Button variant="contained" color="primary" onClick={this.saveMission}>Save</Button>

                </form>
            </div>
        );
    }
}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default EditMissionComponent;