import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser, faPencilAlt, faBriefcase, faBookReader, faCertificate,
  faTrophy, faTimes
} from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-date-picker';

import { Panel, PanelHeader, PanelBody } from '../Panel';
import ModalPopup from '../ModalPopup';
import Button from '../Button';
import InputCom from '../InputCom';

import { GridWidth, FlexBox, FullWidth, CustomTextArea, ProfileTitle, ErrorMsg, 
  SaveChanges, InputTitle, CalendarDiv, ProjectButton } from './styles';

class ResumeMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalPopup: '',
      profileInfo: ''
    }
  }

  getPanel = (obj) => {
    return (
      <Panel>
        <PanelHeader>
          <div className="leftSide">
            <span>{obj.icon}</span>
            {obj.title}
          </div>
          <div>
            {obj.option}
          </div>
        </PanelHeader>
        <PanelBody>
          {obj.body}
        </PanelBody>
      </Panel>
    )
  }

  changeModalPopup = (text) => {
    this.setState({
      showModalPopup: text
    })
  }

  getProfileOverview = () => {
    const obj = {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'Profile Overview',
      option: <FontAwesomeIcon icon={faPencilAlt} onClick={() => this.changeModalPopup('profile')} className="rightSide"/>,
      body: ''
    };
    return this.getPanel(obj)
  }

  getExperienceAndProjects = () => {
    const obj = {
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      title: 'Experience and Projects',
      option: this.getAddMoreButtonUI('Add more Experience','experience'),
      body: ''
    };
    return this.getPanel(obj)
  }

  getEducation = () => {
    const obj = {
      icon: <FontAwesomeIcon icon={faBookReader} />,
      title: 'Education',
      option: this.getAddMoreButtonUI('Add more Education','education'),
      body: ''
    };
    return this.getPanel(obj)
  }

  getCertification = () => {
    const obj = {
      icon: <FontAwesomeIcon icon={faCertificate} />,
      title: 'Certifications',
      option: this.getAddMoreButtonUI('Add more Certification','certificate'),
      body: ''
    };
    return this.getPanel(obj)
  }

  getAwards = () => {
    const obj = {
      icon: <FontAwesomeIcon icon={faTrophy} />,
      title: 'Awards, Events And Publications',
      option: this.getAddMoreButtonUI('Add more Awards','awards'),
      body: ''
    };
    return this.getPanel(obj)
  }

  getAddMoreButtonUI = (text, key) => {
    return  <span className="rightSide" onClick={() => this.changeModalPopup(key)}>{`+ ${text}`}</span>
  }

  changeInputValue = (e, key) => {
    this.setState({
      [key]: e.target.value
    })
  }

  getProfileBody = () => {
    const { profileInfo } = this.state;
    return (
      <>
        <ProfileTitle>
          Some Words About You (Max 500 Characters)
        </ProfileTitle>
        <CustomTextArea 
          error={profileInfo && profileInfo.length<100}
          onChange={(e) => this.changeInputValue(e, 'profileInfo')}
          value={profileInfo}
        />
        {(profileInfo && profileInfo.length<100) && <ErrorMsg>About should be at least 100 characters!</ErrorMsg>}
        <SaveChanges>
          <Button>Save Changes</Button>
        </SaveChanges>
      </>
    )
  }

  getTextAreaField = (title) => {
    return(
      <>
        <InputTitle>{title}</InputTitle>
        <CustomTextArea />
      </> 
    )
  }

  getInputField = (title) => {
    return(
      <>
        <InputTitle>{title}</InputTitle>
        <InputCom />
      </>
    )
  }

  getCalendarField = (title) => {
    return(
      <CalendarDiv>
        <InputTitle>{title}</InputTitle>
        <DatePicker className="calendarUI"/> 
      </CalendarDiv>
    )
  }

  getExperienceModal = () => {
    return(
      <FlexBox>
        <GridWidth width="50%">
          {this.getInputField('Title')}
        </GridWidth>
        <GridWidth width="50%">
          {this.getInputField('Company Name')}
        </GridWidth>
        <GridWidth width="25%">
          {this.getCalendarField('Start Date')}
        </GridWidth>
        <GridWidth width="25%">
          {this.getCalendarField('End Date')}
        </GridWidth>
        <GridWidth width="50%">
          {this.getInputField('Location')}
        </GridWidth>
        <GridWidth>
          {this.getTextAreaField('Description')}
        </GridWidth>
        <GridWidth>
          <ProjectButton onClick={() => this.changeModalPopup('project')}>+ Add Project</ProjectButton>
        </GridWidth>
        <SaveChanges>
          <Button>Save Changes</Button>
        </SaveChanges>
      </FlexBox>
    )
  }

  getEducationModal = () => {
    return(
      <FlexBox>
        <GridWidth width="50%">
          {this.getInputField('Degree')}
        </GridWidth>
        <GridWidth width="25%">
          {this.getCalendarField('Start Date')}
        </GridWidth>
        <GridWidth width="25%">
          {this.getCalendarField('End Date')}
        </GridWidth>
        <GridWidth width="50%">
          {this.getInputField('School/Institution Name')}
        </GridWidth>
        <GridWidth width="50%">
          {this.getInputField('Location')}
        </GridWidth>
        <GridWidth>
          {this.getTextAreaField('Description')}
        </GridWidth>
        <SaveChanges>
          <Button>Save Changes</Button>
        </SaveChanges>
      </FlexBox>
    )
  }

  getCertificationnModal = () => {
    return(
      <FlexBox>
        <GridWidth width="34%">
          {this.getInputField('Certification Name')}
        </GridWidth>
        <GridWidth width="33%">
          {this.getCalendarField('Start Date')}
        </GridWidth>
        <GridWidth width="33%">
          {this.getCalendarField('End Date')}
        </GridWidth>
        <GridWidth width="50%">
          {this.getInputField('Institution Name')}
        </GridWidth>
        <GridWidth width="50%">
          {this.getInputField('Location')}
        </GridWidth>
        <GridWidth>
          {this.getTextAreaField('Description')}
        </GridWidth>
        <SaveChanges>
          <Button>Save Changes</Button>
        </SaveChanges>
      </FlexBox>
    )
  }

  getAwardModal = () => {
    return(
      <FlexBox>
        <GridWidth width="34%">
          {this.getInputField('Institution Name')}
        </GridWidth>
        <GridWidth width="33%">
          {this.getInputField('Award/Event/Publiation Name')}
        </GridWidth>
        <GridWidth width="33%">
          {this.getCalendarField('Date of Award/Event/Publiation')}
        </GridWidth>
        <GridWidth>
          {this.getTextAreaField('Description')}
        </GridWidth>
        <SaveChanges>
          <Button>Save Changes</Button>
        </SaveChanges>
      </FlexBox>
    )
  }

  getProjectModal = () => {
    return(
      <FlexBox>
        <GridWidth width="100%">
          {this.getInputField('Project Name')}
        </GridWidth>
        <GridWidth width="50%">
          {this.getTextAreaField('Skills')}
        </GridWidth>
        <GridWidth width="50%">
          {this.getInputField('App Link')}
        </GridWidth>
        <GridWidth width="50%">
          {this.getCalendarField('Start Date')}
        </GridWidth>
        <GridWidth width="50%">
          {this.getCalendarField('End Date')}
        </GridWidth>
        <GridWidth>
          {this.getTextAreaField('Description')}
        </GridWidth>
        <SaveChanges>
          <Button>Save Changes</Button>
        </SaveChanges>
      </FlexBox>
    )
  }

  getPanelPopup = (icon, text, bodyFunc) => {
    const obj = {
      icon: icon ? icon : '',
      title: text,
      option: <FontAwesomeIcon icon={faTimes} onClick={() => this.changeModalPopup()} />,
      body: bodyFunc()
    };
    return this.getPanel(obj) 
  }

  closeModal = () => {
    this.setState({
      showModalPopup: ''
    })  
  }

  getModalPopupUI = () => {
    const { showModalPopup } = this.state;
    return (
      <ModalPopup maxWidth="lg" closeFunc={this.closeModal}>
        {showModalPopup === 'profile' && this.getPanelPopup('', 'Edit Profile Overview', this.getProfileBody)}
        {showModalPopup === 'experience' && this.getPanelPopup('', 'Add Experience', this.getExperienceModal)}
        {showModalPopup === 'education' && this.getPanelPopup('', 'Add Education', this.getEducationModal)}
        {showModalPopup === 'certificate' && this.getPanelPopup('', 'Add Certification', this.getCertificationnModal)}
        {showModalPopup === 'awards' && this.getPanelPopup('', 'Add Event', this.getAwardModal)}
        {showModalPopup === 'project' && this.getPanelPopup('', 'Add Project', this.getProjectModal)}
        {showModalPopup === 'highlights' && this.getPanelPopup('', 'Edit Hightlights', this.getHighlightsBody)}
        {showModalPopup === 'personal' && this.getPanelPopup('', 'Edit Personal Details', this.getPersonalModal)}
      </ModalPopup>
    )
  }

  getHighlightsUI = () => {
    const obj = {
      icon: '',
      title: 'Highlights',
      option: <FontAwesomeIcon icon={faPencilAlt} onClick={() => this.changeModalPopup('highlights')} className="rightSide"/>,
      body: ''
    };
    return this.getPanel(obj)
  }

  getPersonalModal = () => {
    return(
      <FlexBox>
        <GridWidth width="34%">
          {this.getInputField('Email Id')}
        </GridWidth>
        <GridWidth width="33%">
          {this.getInputField('Phone No')}
        </GridWidth>
        <GridWidth width="33%">
          {this.getInputField('Location')}
        </GridWidth>
        <SaveChanges>
          <Button>Save Changes</Button>
        </SaveChanges>
      </FlexBox>
    )
  }

  getPersonalUI = () => {
    const obj = {
      icon: '',
      title: 'Personal Info',
      option: <FontAwesomeIcon icon={faPencilAlt} onClick={() => this.changeModalPopup('personal')} className="rightSide"/>,
      body: ''
    };
    return this.getPanel(obj)
  }

  getHighlightsBody = () => {
    return (
      <>
        <ProfileTitle>
          Please add the top highlights of your profile. For eg. React Ninja, Amazon, Software Architect, etc.(Add highlights by pressing Enter)
        </ProfileTitle>
        <InputCom />
        <SaveChanges>
          <Button>Save Changes</Button>
        </SaveChanges>
      </>
    )
  }

  render() {
    const { showModalPopup } = this.state;
    return (
      <FullWidth>
        {(showModalPopup && showModalPopup.trim() !== '') && this.getModalPopupUI()}
        <FlexBox>
          <GridWidth width="35%">
            {this.getPersonalUI()}
            {this.getHighlightsUI()}
          </GridWidth>
          <GridWidth width="65%">
            {this.getProfileOverview()}
            {this.getExperienceAndProjects()}
            {this.getEducation()}
            {this.getCertification()}
            {this.getAwards()}
          </GridWidth>
        </FlexBox>
      </FullWidth>
    )
  }
}

export default ResumeMaker;