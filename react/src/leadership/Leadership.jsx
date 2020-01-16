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
import {getLeadershipList} from '../util/APIUtils'

class Leadership extends Component {

    constructor(props) {
        super(props)
        this.state = {
            leaderships: [],
            message: null
        }
        this.deleteLeadership = this.deleteLeadership.bind(this);
        this.editLeadership = this.editLeadership.bind(this);
        this.addLeadership = this.addLeadership.bind(this);
        this.reloadLeadershipList = this.reloadLeadershipList.bind(this);
    }

    componentDidMount() {
        this.reloadLeadershipList();
    }

    reloadLeadershipList() {
      getLeadershipList()
            .then((res) => {
                this.setState({leaderships: res.content})
            });
    }

    deleteLeadership(leadershipId) {
        // ApiService.deleteLeadership(leadershipId)
        //    .then(res => {
        //        this.setState({message : 'Leadership deleted successfully.'});
        //        this.setState({leaderships: this.state.leaderships.filter(leadership => leadership.id !== leadershipId)});
        //    })
    }

    editLeadership(id) {
        window.localStorage.setItem("leadershipId", id);
        this.props.history.push('/edit-leadership');
    }

    addLeadership() {
        window.localStorage.removeItem("leadershipId");
        this.props.history.push('/add-leadership');
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Leadership Details</Typography>
                <Button variant="contained" color="primary" onClick={() => this.addLeadership()}>
                    Add Leadership
                </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Leadership Name</TableCell>
                            <TableCell align="right">Designation</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.leaderships.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.designation}</TableCell>
                                <TableCell align="right" onClick={() => this.editLeadership(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="right" onClick={() => this.deleteLeadership(row.id)}><DeleteIcon /></TableCell>

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

export default Leadership;