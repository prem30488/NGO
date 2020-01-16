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

class LeadershipUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            leaderships: [],
            message: null
        }
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


    render() {
        return (
                <React.Fragment>
                <div className="clearfix"></div>
    <section className="spacer" id="about-me">
      <div className="">
        <div className="container">
          <div className="row">
                {this.state.leaderships.map((row) =>
                <div className="col-md-6" key={row.id}>
              <div className="heading">
                <h2>{row.name}</h2>
              </div>
              <div className="about_mission">
                <div>
                  <p> {row.designation} </p>
                
                </div>
              </div>
            </div>
  )}                
   </div>
          <br /><br /><br />
        </div>
      </div>
    </section>
            </React.Fragment>
                
        );
    }

}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default LeadershipUser;