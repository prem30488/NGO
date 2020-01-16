import React, { Component } from 'react';
import Banner from '../home/banner';
import OverviewUser from '../aboutus/OverviewsUser';
import MissionUser from '../mission/MissionUser';
import LeadershipUser from '../leadership/LeadershipUser'
import AwardUser from '../award/AwardUser';
import TestimonialsUser from '../testimonial/TestimonialUser';
class HomeUser extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <React.Fragment>
            <Banner></Banner>
            
            <OverviewUser />
            <MissionUser />
            <h1>Advisory Body</h1>
            <p>Coming Soon</p>
            <LeadershipUser />
            <AwardUser />
            <TestimonialsUser />
    </React.Fragment>
        )
    }
}
  export default HomeUser;