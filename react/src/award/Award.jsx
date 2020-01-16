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
import {getAwardList} from '../util/APIUtils'

class Award extends Component {

    constructor(props) {
        super(props)
        this.state = {
            awards: [],
            message: null
        }
        this.deleteAward = this.deleteAward.bind(this);
        this.editAward = this.editAward.bind(this);
        this.addAward = this.addAward.bind(this);
        this.reloadAwardList = this.reloadAwardList.bind(this);
    }

    componentDidMount() {
        this.reloadAwardList();
    }

    reloadAwardList() {
      getAwardList()
            .then((res) => {
                this.setState({awards: res.content})
            });
    }

    deleteAward(awardId) {
        // ApiService.deleteAward(awardId)
        //    .then(res => {
        //        this.setState({message : 'Award deleted successfully.'});
        //        this.setState({awards: this.state.awards.filter(award => award.id !== awardId)});
        //    })
    }

    editAward(id) {
        window.localStorage.setItem("awardId", id);
        this.props.history.push('/edit-award');
    }

    addAward() {
        window.localStorage.removeItem("awardId");
        this.props.history.push('/add-award');
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Award Details</Typography>
                <Button variant="contained" color="primary" onClick={() => this.addAward()}>
                    Add Award
                </Button>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Award Title</TableCell>
                            <TableCell align="right">Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.awards.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.description}</TableCell>
                                <TableCell align="right" onClick={() => this.editAward(row.id)}><CreateIcon /></TableCell>
                                <TableCell align="right" onClick={() => this.deleteAward(row.id)}><DeleteIcon /></TableCell>

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

export default Award;