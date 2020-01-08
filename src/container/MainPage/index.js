import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarAlt, faPlane, faBicycle, faWalking, faBus  } from '@fortawesome/free-solid-svg-icons';
// import Calendar from 'ciqu-react-calendar';
import { connect } from 'react-redux';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

/**Components */
import InputCom from '../../components/InputCom';
import CheckBox from '../../components/CheckBox';
import Button from '../../components/Button';

/**Styles */
import {
  LoginBox, LoginHeader, BrandLogo, SignInBox, RememberBox, IconWrapper, IconFlex
} from './styles';

import { fetchRegisterAPI } from '../../redux/actions';

class MainPage extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPass: '',
      rememberMe: false
    }
  }

  changeInput = (e, key) => {
    this.setState({
      [key]: e.target.value
    })
  }

  changeCheckBox = () => {
    this.setState({
      rememberMe: !this.state.rememberMe
    })
  }

  changeStartDate = (date) => {
    this.setState({
      startDate: date
    })
  }

  changeEndDate = (date) => {
    this.setState({
      endDate: date
    })
  }

  getInput = (obj) => {
    return (
      <InputCom
        type={obj.type}
        placeholder={obj.placeHolder}
        onChange={(e) => this.changeInput(e, obj.key)}
        value={obj.value}
        filled={obj.value && obj.value.trim() !== ''}
      />
    )
  }

  registerUI = () => {
    const { password, confirmPass, email, name} = this.state;
    let obj = {
      "name": name,
      "email": email,
      "password": password,
      "confirm_pass": confirmPass,
    }
    const { registerAction } = this.props;
    registerAction(obj)
  }

  // getLoginUI = () => {
  //   const { name, email, password, confirmPass } = this.state;
  //   let inputData = [
  //     {
  //       type: 'text',
  //       placeHolder: 'Name',
  //       key: 'organisationName',
  //       value: name,
  //       icon: faUser
  //     },
  //     {
  //       type: 'text',
  //       placeHolder: 'Admin email',
  //       key: 'email',
  //       value: email,
  //       icon: faEnvelope
  //     },
  //     {
  //       type: 'password',
  //       placeHolder: 'Password',
  //       key: 'password',
  //       value: password,
  //       icon: faKey
  //     },
  //     {
  //       type: 'password',
  //       placeHolder: 'confirm Password',
  //       key: 'confirm_password',
  //       value: confirmPass,
  //       icon: faKey
  //     }
  //   ]
  //   return (
  //     <SignInBox>
  //       {inputData.map((obj, index) => (
  //         <div className="marginBetGrid" key={index}>
  //           {this.getInput(obj)}
  //           {obj.icon &&
  //             <span className="icon">
  //               <FontAwesomeIcon icon={obj.icon} />
  //             </span>
  //           }
  //         </div>
  //       ))}
  //       {/* <div className="marginBetGrid">
  //         <DatePicker
  //           value={startDate}
  //           onChange={this.changeStartDate}
  //           className="calendarUI"
  //         />        
  //       </div>
  //       <div className="marginBetGrid">
  //         <DatePicker
  //           value={endDate}
  //           onChange={this.changeEndDate}
  //           className="calendarUI"
  //           name="End Date"
  //         />
  //       </div>   */}
  //       {this.getRememberMeUI()}
  //       {this.getSignButton()}
  //     </SignInBox>
  //   )
  // }

  getSignButton = () => {
    return (
      <div className="marginBetGrid">
        <Button onClick={() => this.registerUI()}>
          Sign Up
        </Button>
      </div>
    )
  }

  getRememberMeUI = () => {
    const { rememberMe } = this.state;
    return (
      <div className="marginBetGrid">
        <RememberBox>
          <CheckBox checked={rememberMe} disabled={false} changeFunc={this.changeCheckBox} params="rememberMe">
            Sign Up, you agree to our <span>Terms</span> and that you have read our <span>Data Policy</span>, including our <span>Cookie Use</span>.
          </CheckBox>
        </RememberBox>
      </div>
    )
  }

  changeRoute = (url) => {
    const { history } = this.props;
    history.push(url);
  }

  getRootUI = () => {
    let data = [
      {
        type: 'cycle',
        icon: faBicycle
      },
      {
        type: 'walking',
        icon: faWalking
      },
      {
        type: 'bus',
        icon: faBus
      },
      {
        type: 'car',
        icon: faCarAlt
      },
      {
        type: 'plane',
        icon: faPlane
      }
    ]
    return(
      <IconFlex>
        { data.map((obj, index) => (
          <IconWrapper icon={obj.icon} />
        ))}
      </IconFlex>
    )
  }

  render() {
    return (
      <div>
        {this.getRootUI()}
        {/* <LoginBox>
          <LoginHeader>
            <div className="brand">
              <BrandLogo />
              Create your <b>Resume Maker</b> Account
            </div>
          </LoginHeader>
          {this.getLoginUI()}
          <div className="signUpText">
            Already a member? click <span onClick={() => this.changeRoute('/login')}>here</span> to login.
          </div>
        </LoginBox> */}
      </div>
    )
  }
}

const mapDistpatchToProps = (dispatch) => ({
  registerAction: (data) => dispatch(fetchRegisterAPI(data))
})

export default connect(null, mapDistpatchToProps)(MainPage);
