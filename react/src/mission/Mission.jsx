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
import {getMissionList} from '../util/APIUtils'

class Mission extends Component {

    constructor(props) {
        super(props)
        this.state = {
            missions: [],
            message: null
        }
        this.deleteMission = this.deleteMission.bind(this);
        this.editMission = this.editMission.bind(this);
        this.addMission = this.addMission.bind(this);
        this.reloadMissionList = this.reloadMissionList.bind(this);
    }

    componentDidMount() {
        this.reloadMissionList();
    }

    reloadMissionList() {
      getMissionList()
            .then((res) => {
                this.setState({missions: res.content})
            });
    }

    deleteMission(missionId) {
        // ApiService.deleteMission(missionId)
        //    .then(res => {
        //        this.setState({message : 'Mission deleted successfully.'});
        //        this.setState({missions: this.state.missions.filter(mission => mission.id !== missionId)});
        //    })
    }

    editMission(id) {
        window.localStorage.setItem("missionId", id);
        this.props.history.push('/edit-mission');
    }

    addMission() {
        window.localStorage.removeItem("missionId");
        this.props.history.push('/add-mission');
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Mission Details</Typography>
                <Button variant="contained" color="primary" onClick={() => this.addMission()}>
                    Add Mission
                </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Mission Title</TableCell>
                            <TableCell align="right">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.missions.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right" onClick={() => this.editMission(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="right" onClick={() => this.deleteMission(row.id)}><DeleteIcon /></TableCell>

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

export default Mission;