import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import AppHeader from '../common/AppHeader';
import AppFooter from '../common/AppFooter';
import Home from '../home/Home';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import Profile from '../user/profile/Profile';
import Contact from '../user/contact/Contact';
import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';
import PrivateRoute from '../common/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';
import Overview from '../aboutus/Overview';
import AddOverviewComponent from "../aboutus/AddOverviewComponent";
import EditOverviewComponent from "../aboutus/EditOverviewComponent";
import bannerAdmin from "../home/bannerAdmin";
import Mission from '../mission/Mission';
import AddMissionComponent from "../mission/AddMissionComponent";
import EditMissionComponent from "../mission/EditMissionComponent";

import Leadership from '../leadership/Leadership';
import AddLeadershipComponent from "../leadership/AddLeadershipComponent";
import EditLeadershipComponent from "../leadership/EditLeadershipComponent";

import Award from '../award/Award';
import AddAwardComponent from "../award/AddAwardComponent";
import EditAwardComponent from "../award/EditAwardComponent";

import Testimonial from '../testimonial/Testimonial';
import AddTestimonialComponent from "../testimonial/AddTestimonialComponent";
import EditTestimonialComponent from "../testimonial/EditTestimonialComponent";

import PropTypes from 'prop-types';

import { BrowserRouter as Router } from 'react-router-dom'
import ListUserComponent from "../user/ListUserComponent";
import AddUserComponent from "../user/AddUserComponent";
import EditUserComponent from "../user/EditUserComponent";

import HomeUser from '../home/HomeUser';
import OverviewsUser from '../aboutus/OverviewsUser';
import MissionsUser from '../mission/MissionUser';
import LeadershipUser from '../leadership/LeadershipUser';
import AwardUser from '../award/AwardUser';
import TestimonialUser from '../testimonial/TestimonialUser';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    this.setState({
      loading: true
    });

    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        authenticated: true,
        loading: false
      });
    }).catch(error => {
      this.setState({
        loading: false
      });  
    });    
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    Alert.success("You're safely logged out!");
    window.location.reload();
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    if(this.state.loading) {
      return <LoadingIndicator />
    }

    return (
      <div className="app">
        <div className="app-top-box">
          <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout} />
        </div>
        <div className="app-body">
          <Switch>
          <Route exact path="/" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={Home}></Route>
            <PrivateRoute exact path="/home"  authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...this.props}
             component={Home}></PrivateRoute>

            <PrivateRoute path="/profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...this.props}
              component={Profile}></PrivateRoute>
            <PrivateRoute path="/contact" authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...this.props}
              component={Contact}></PrivateRoute>
            <PrivateRoute exact path="/about" authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...this.props}
              component={Overview}></PrivateRoute>

            <PrivateRoute exact path="/overviews" authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...this.props}
              component={Overview}></PrivateRoute>
            <PrivateRoute path="/add-overview" authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...this.props} component={AddOverviewComponent} />
            <PrivateRoute path="/edit-overview" authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...this.props} component={EditOverviewComponent} />

            <PrivateRoute exact path="/missions" authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...this.props}
              component={Mission}></PrivateRoute>
            <PrivateRoute path="/add-mission" authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...this.props} 
            component={AddMissionComponent} />
            <PrivateRoute path="/edit-mission" authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...this.props} 
            component={EditMissionComponent} />

            <PrivateRoute exact path="/leaderships" authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...this.props}
              component={Leadership}></PrivateRoute>
            <PrivateRoute path="/add-leadership" authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...this.props} 
            component={AddLeadershipComponent} />
            <PrivateRoute path="/edit-leadership" authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...this.props} 
            component={EditLeadershipComponent} />

            <PrivateRoute exact path="/awards" authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...this.props}
              component={Award}></PrivateRoute>
            <PrivateRoute path="/add-award" authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...this.props} 
            component={AddAwardComponent} />
            <PrivateRoute path="/edit-award" authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...this.props} 
            component={EditAwardComponent} />

            <PrivateRoute exact path="/testimonials" authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...this.props}
              component={Testimonial}></PrivateRoute>
            <PrivateRoute path="/add-testimonial" authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...this.props} 
            component={AddTestimonialComponent} />
            <PrivateRoute path="/edit-testimonial" authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...this.props} 
            component={EditTestimonialComponent} />


            <PrivateRoute path="/users" authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...this.props} component={ListUserComponent} />
            <PrivateRoute path="/add-user" authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...this.props} component={AddUserComponent} />
            <PrivateRoute path="/edit-user" authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...this.props} component={EditUserComponent} />

            <PrivateRoute path="/bannerAdmin" authenticated={this.state.authenticated} currentUser={this.state.currentUser} {...this.props} component={bannerAdmin} />          
            <Route path="/login"
              render={(props) => <Login authenticated={this.state.authenticated} 
              onlogin={this.loadCurrentlyLoggedInUser} 
              {...props} />}></Route>
            <Route path="/signup"
              render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}></Route>
            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>  
            <Route path="/overviewsUser"  component={OverviewsUser}></Route>
            <Route path="/missionsUser"  component={MissionsUser}></Route>
            <Route path="/leadershipsUser"  component={LeadershipUser}></Route>
            <Route path="/awardsuser"  component={AwardUser}></Route>
            <Route path="/testimonialsUser"  component={TestimonialUser}></Route>
            <Route path="/homeUser"  component={HomeUser}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
        <div>
          <AppFooter></AppFooter>
        </div>
        <Alert stack={{limit: 3}} 
          timeout = {3000}
          position='top-right' effect='slide' offset={65} />
      </div>
    );
  }
}
App.propTypes = {
  authenticated: PropTypes.bool,
  currentUser: PropTypes.object,
  loading: PropTypes.bool
};

export default App;