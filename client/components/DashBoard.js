import React, { Component } from 'react';

class DashBoard extends Component {
  constructor (props) {
    super(props);
    this.state = {
        tickets : [],
        search: '',
        foundTicket: '',
    }
  }

  componentDidMount() {
    fetch('https://data.cityofnewyork.us/resource/nc67-uf89.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ tickets: data});
      })
      .catch(err => console.log(err));
  }

  handleSearch = (event) => {

    event.preventDefault();
    const plateSearch = (event.target.search.value).toString();
    console.log(plateSearch)
    console.log(this.state.tickets)
    const foundTicket = this.state.tickets.find((ticket) => {
      if(ticket.plate === plateSearch) return ticket;
      // console.log(typeof ticket.plate, typeof plateSearch)
    });
    console.log(foundTicket)
    if (foundTicket) {
      this.setState({ foundTicket });
    } else {
      this.setState({ foundTicket: null });
    }
  };
  render() {
    console.log(this.state.foundTicket)
    const { foundTicket } = this.state;
    const { plate,state,summons_number,issue_date,violation_time,violation,fine_amount,payment_amount,amount_due,precinct,county,issuing_agency,summons_image} = foundTicket || {};
    const ticketUrl = Object.assign({},summons_image);
    const {url} = ticketUrl || {};

    return (
      <div id = "dashboard">
        <img src ="https://s3-us-west-1.amazonaws.com/files.delesign/assets/Multimedia%20Icons-21.svg" width = '200px'/>
        <form id = "searchForm" onSubmit={this.handleSearch}>
          <label htmlFor="search">Plate #: </label>
          <input type="text" name="search" width = "300px"/>
          <button type='submit'>search</button>
        </form>

        {foundTicket ? (
          <div id = "ticket-card">
            <p>Plate: {plate}</p>
            <p>State: {state}</p>
            <p>Summons#: {summons_number}</p>
            <p>Issue date: {issue_date}</p>
            <a href={url}>Summon Image</a>
            <iframe src={url} height="200" width="300" title="Iframe"></iframe>
          </div>
        ) : (
          <p>find your parking ticket</p>
        )}
      </div>
    );
  }
}

export default DashBoard;
