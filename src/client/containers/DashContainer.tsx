/**
 * @module DashContainer.tsx
 * @description Dashboard Container for User 
 */

import * as React from 'react';
import { Component } from 'react';

import WelcomeForm from '../components/WelcomeForm';
import OverviewQuad from '../components/OverviewQuad';
import StockQuad from '../components/StockQuad';
import IssuesQuad from '../components/IssuesQuad';
import CompanyListQuad from '../components/CompanyListQuad';

import '../assets/DashContainer.css';
// import { any } from 'prop-types';

const HOST = 'http://localhost:3000';

interface IDashContainerState {
  companyList: [];
  isAuthenticated: boolean;
  highlightedCompany: any;
}

class DashContainer extends Component<{}, IDashContainerState> {
  constructor(props: any) {
    super(props);
    this.state = {
      //TODO: add this into user object
      companyList: [],
      isAuthenticated: true,
      highlightedCompany: {}
    };
    this.selectCompany = this.selectCompany.bind(this);
    this.sortListBy = this.sortListBy.bind(this);

  }

  selectCompany(e: any) {
    const companyIndex = Number(e.target.id);
    e.stopPropagation();
    this.setState((prevState) => {
      return {
        ...prevState,
        highlightedCompany: this.state.companyList[companyIndex]
      }
    })
  }

  sortListBy(e: any) {
    const sortCategory = e.target.id;

    if (sortCategory === 'company-list-name') {
      const topOfListCompany = this.state.companyList.slice(0, 1)[0];

      if (topOfListCompany['name'][0] !== 'Z') {
        this.setState((prevState) => {
          return {
            ...prevState,
            companyList:
              prevState.companyList.sort((a: any, b: any): any => {
                if (a.name.toUpperCase() > b.name.toUpperCase()) return -1;
                if (a.name.toUpperCase() < b.name.toUpperCase()) return 1;
                return 0;
              })
          }
        })
      } else {
        this.setState((prevState) => {
          return {
            ...prevState,
            companyList:
              prevState.companyList.sort((a: any, b: any): any => {
                if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
                if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
                return 0;
              })
          }
        })
      }
    }

    if (sortCategory === 'company-list-ticker') {
      const topOfListCompany = this.state.companyList.slice(0, 1)[0];

      if (topOfListCompany['ticker'][0] !== 'Z') {
        this.setState((prevState) => {
          return {
            ...prevState,
            companyList:
              prevState.companyList.sort((a: any, b: any): any => {
                if (a.ticker.toUpperCase() > b.ticker.toUpperCase()) return -1;
                if (a.ticker.toUpperCase() < b.ticker.toUpperCase()) return 1;
                return 0;
              })
          }
        })

      } else {
        this.setState((prevState) => {
          return {
            ...prevState,
            companyList:
              prevState.companyList.sort((a: any, b: any): any => {
                if (a.ticker.toUpperCase() < b.ticker.toUpperCase()) return -1;
                if (a.ticker.toUpperCase() > b.ticker.toUpperCase()) return 1;
                return 0;
              })
          }
        })
      }
    }

    if (sortCategory === 'company-issue-score') {
      const topOfListCompany = this.state.companyList.slice(0, 1)[0];

      // change hard code to filter by specific issue
      if (topOfListCompany['issues']['civilRightsScore'] !== 0) {
        console.log('sort lowest to highest');
        this.setState((prevState) => {
          return {
            ...prevState,
            companyList:
              prevState.companyList.sort((a: any, b: any): any => {
                // change hard code to filter by specific issue
                return a.issues.civilRightsScore - b.issues.civilRightsScore;
              })
          }
        })
      } else {
        console.log('sort highest to lowest');
        this.setState((prevState) => {
          return {
            ...prevState,
            companyList:
              prevState.companyList.sort((a: any, b: any): any => {
                // change hard code to filter by specific issue
                return b.issues.civilRightsScore - a.issues.civilRightsScore;
              })
          }
        })
      }

    }
  }

  componentDidMount() {
    fetch(`${HOST}/companyList`)
      .then((response: any) => response.json())
      .then((data: any) => {
        data.sort((a: any, b: any): any => {
          if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
          if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
          return 0;
        });
        this.setState({
          companyList: data
        })
        return data;
      })
      .catch((err: any) => console.error(err));
  }

  render() {
    return (
      <div className="form-container">
        {this.state.isAuthenticated ?
          (
            <div className="quads-container">
              <OverviewQuad company={this.state.highlightedCompany} />
              <StockQuad />
              <IssuesQuad company={this.state.highlightedCompany} />
              <CompanyListQuad
                list={this.state.companyList}
                selectCompany={this.selectCompany}
                sortListBy={this.sortListBy}
              />
            </div>
          )
          :
          <WelcomeForm />
        }
      </div>
    )
  }
}

export default DashContainer;
