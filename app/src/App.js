import React, { Component } from 'react';
import {SpreadSheets, Worksheet, Column} from '@grapecity/spread-sheets-react';
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.hostStyle =
      {
        left: "10px",
        right: "10px",
        position: "absolute",
        textAlign: "left"
      };
    var self = this;
    this.workbookInitialized = function(workbook){
      self.spread = workbook;
      console.log(workbook.getSheetCount());
    }
  };
  render() {
    return ( 
      <div style={this.hostStyle}>
        <SpreadSheets workbookInitialized={this.workbookInitialized}></SpreadSheets>
      </div>
    );
  }
}

export default App;