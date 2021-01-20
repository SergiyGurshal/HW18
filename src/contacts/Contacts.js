import React, { Component } from 'react'
import Contact from './contact/Contact'

import contacts from './contactsData'

import searchIcon from '../img/search.svg'

import './contacts.css'

class Contacts extends Component {
  filerContacts = async () => {
    const fiteredContacts = []

    contacts.forEach((contact) => {
      const parsedContactsInfo = (contact.firstName + ' ' + contact.lastName + contact.phone).toLocaleLowerCase()

      if (parsedContactsInfo.includes(this.state.searchValue.toLocaleLowerCase())) {
        if (contact.gender === 'male' && this.state.male) fiteredContacts.push(contact)
        if (contact.gender === 'female' && this.state.female) fiteredContacts.push(contact)
        if (!contact.gender && this.state.notSelected) fiteredContacts.push(contact)
      }
    })

    await this.setState({ contactsToShow: fiteredContacts })
  }

  changeSearch = async (event) => {
    await this.setState({
      searchValue: event.target.value,
    })

    this.filerContacts()
  }

  genderTest = async (event) => {
    await this.setState({
      male: event.target.textContent === 'MALE' ? !this.state.male : this.state.male,
      female: event.target.textContent === 'FEMALE' ? !this.state.female : this.state.female,
      notSelected: event.target.textContent === 'NOT SELECTED' ? !this.state.notSelected : this.state.notSelected,
    })

    this.filerContacts()
  }

  state = {
    contactsToShow: [...contacts],
    male: true,
    female: true,
    notSelected: true,
    searchValue: '',
  }

  render() {
    return (
      <div className="contacts">
        <div className="searchBar">
          <span className="searchIcon">
            <img src={searchIcon} alt="Search Icon" width="100%" height="100%" />
          </span>
          <input type="text" className="searchInput" placeholder="Search" onChange={this.changeSearch} />
        </div>
        <div className="genderPanel">
          <div className={this.state.male ? 'genderBtns checked' : 'genderBtns unchecked'} onClick={this.genderTest}>
            MALE
          </div>
          <div className={this.state.female ? 'genderBtns checked' : 'genderBtns unchecked'} onClick={this.genderTest}>
            FEMALE
          </div>
          <div className={this.state.notSelected ? 'genderBtns checked' : 'genderBtns unchecked'} onClick={this.genderTest}>
            NOT SELECTED
          </div>
        </div>
        <div className="contactsList">
          {this.state.contactsToShow.map((contact, id) => (
            <Contact {...contact} key={id} />
          ))}
        </div>
      </div>
    )
  }
}

export default Contacts
