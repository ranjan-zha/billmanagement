import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import "./ManageCharges.css";
import MaterialTable from "material-table";
import { Table } from '@material-ui/core';
import EnhancedTable from './EnhancedTableHead';

export default class ManageCharges extends Component{
    constructor(props){
        super(props);
        this.state= {
            role : window.localStorage.getItem('Role'),
        }
    }
    render(){       
        return(
            <Grid item lg={12} sm={12} className="mngchrg-container1">
              <Grid item lg={12} sm={12} className="header">
                <div className="head-title"><h2>Welcome {this.state.role}</h2></div>
              </Grid>
              <Grid item lg={12} sm={12} className="mngchrg-table">                  
                <EnhancedTable role={this.state.role}/>                                  
              </Grid>
            </Grid>
        )
    }
}