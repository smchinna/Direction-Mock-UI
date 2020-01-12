import React from 'react';
import { connect } from 'react-redux';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';
import { FaArrowAltCircleDown } from 'react-icons/fa';

/**Styles */
import {
  Box, FlexBox, CardList
} from './styles';

import Button from '../../components/Button';

import { fetchRouteAPI, fetchDirectionsAPI } from '../../redux/actions';

class MainPage extends React.Component {

  constructor() {
    super();
    this.state = {
      stop: '',
      from: '',
      destinationIndex: null,
      destionation: null
    }
  }

  componentDidMount() {
    const { fetchRouteAPI } = this.props;
    fetchRouteAPI();
  }

  changeDropDown = (e, key) => {
    this.setState({
      [key]: e,
      destinationIndex: null,
      destionation: null
    })
  }

  getDropdownUI = (key, option, placeholder) => {
    return (
      <Dropdown 
        options={option} 
        value={this.state[key]} 
        onChange={(e) => this.changeDropDown(e, key)} 
        placeholder={placeholder}
      />
    )
  }

  submit = () => {
    const { from, stop } = this.state;
    const { fetchDirectionsAPI } = this.props;
    if(from && from.value) {
      let obj = {
        route: from.value
      }
      if(stop && stop.value) {
        obj.stop = stop.value
      }
      fetchDirectionsAPI(obj)
    }
  }

  changeDestIndex = (e) => {
    console.log(e)
    this.setState({
      destionation: e,
      destinationIndex: e.value
    })
  }

  listOfDestUI = () => {
    const { listOfDestination } = this.props;
    const { destionation } = this.state;
    let option = (listOfDestination && listOfDestination.options) ? listOfDestination.options : [];
    console.log(destionation)
    return (
      <div className="margin-top-drop">
        <div className="title">Destination</div>
        <Dropdown 
          options={option} 
          value={destionation} 
          onChange={(e) => this.changeDestIndex(e)} 
          placeholder={"Select destionation"}
        />
      </div>
    )
  }

  getDestionationDropUI = () => {
    const { waitForDest, calledAPI } = this.props;
    if(calledAPI) {
      if(waitForDest) {
        return (
          <div>Wait for destination API</div>
        )
      } else {
        return this.listOfDestUI();
      }
    } else {
      return <></>
    }
  }

  getRouteUI = () => {
    const { from, destionation, destinationIndex }  = this.state;
    const { listOfDestination } = this.props;
    let routes = listOfDestination.directions[destinationIndex];
    console.log(routes)
    return(
      <FlexBox>
        <Box>
          <div className="header-box"> 
            Route Details
          </div>
          <div className="margin-top-drop scroll-box">
            <CardList >
              {from.label} (From)
            </CardList>
            <CardList noBg={1}>
              <FaArrowAltCircleDown />
            </CardList>
           {routes && routes.stop && routes.stop.map((obj, index) => (
              <>
                <CardList key={index}>
                  {obj.title}
                </CardList>
                <CardList noBg={1}>
                  <FaArrowAltCircleDown />
                </CardList>
              </>
           ))}
            <CardList >
              {destionation.label} (Destination)
            </CardList>
          </div>
        </Box>
      </FlexBox>
    )
  }

  render() {
    const { routes } = this.props;
    const { destinationIndex, destionation }  = this.state;
    return (
      <div>
        <FlexBox>
          <Box>
            <div className="header-box"> 
              California-Northern Public Transport
            </div>
            <div className="margin-top-drop">
              <div className="agency">
                (Agency: San Francisco Muni)
              </div>
            </div>
            <div className="margin-top-drop">
              <div className="title">From</div>
              {this.getDropdownUI('from', routes, 'Start Point')}
            </div>
            <div className="margin-top-drop">
              <div className="title">Stop Point<span>(Optional)</span></div>
              {this.getDropdownUI('stop', routes, 'stop Point')}
            </div>
            <div className="button-wrapper">
              <Button onClick={() => this.submit()}>
                Search List Of Destination
              </Button>
            </div>
            <div className="margin-top-drop">
              {this.getDestionationDropUI()}
            </div>
          </Box>
        </FlexBox>
        { destinationIndex >= 0 && destionation && destionation.label && this.getRouteUI() }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  routes: state.transport.routes,
  listOfDestination: state.transport.listOfDestination,
  calledAPI: state.transport.calledAPI,
  waitForDest: state.transport.waitForDest
})

const mapDistpatchToProps = (dispatch) => ({
  fetchRouteAPI: () => dispatch(fetchRouteAPI()),
  fetchDirectionsAPI: (data) => dispatch(fetchDirectionsAPI(data))
})

export default connect(mapStateToProps, mapDistpatchToProps)(MainPage);
