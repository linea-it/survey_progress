import React, { Component } from 'react';
import { Cell, Column, Table, RegionCardinality } from "@blueprintjs/table";
 
class HomeTable extends Component {
  state = this.initialState;

  get initialState() {
    return {
    };
  }

  columns = [

  ]  

  render() {
    return (
      <div>
        <Table 
          numRows={10}
            enableColumnReordering={true}
            selectionModes={RegionCardinality.ROWS_ONLY}
            >
            <Column name="Date time" />
            <Column name="Nite" />
            <Column name="Exposure" />
            <Column name="CCD" />
            <Column name="Band" />
        </Table>
      </div>
    );
  }
}

export default HomeTable;
