import React, { Component } from 'react';
import { Cell, Column, Table, RegionCardinality } from "@blueprintjs/table";
import {DataTable} from 'primereact/datatable'; 
import {ExposureApi} from './ExposureApi';

class HomeTable extends Component {
  state = this.initialState;
  api = new ExposureApi();

  get initialState() {
    return {
      data:[],
      page: 1,
      sizePerPage: 10,
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchData(this.state.page, this.state.sizePerPage);
  }

  fetchData = (page, sizePerPage) => {
    this.setState({ loading: true });

    this.api.getExposures({ page: page, pageSize: sizePerPage }).then(res => {
      const r = res.data;
      this.setState({
        data: r.results,
        totalSize: r.count,
        page: page,
        sizePerPage: sizePerPage,
        loading: false,
      });
    });
  };

  render() {
    return (
      <div>
        <DataTable value={this.state.data} >
            <Column field="nite" header="Nite" />
            <Column field="expnum" header="Exposure" />
            <Column field="ccdnum" header="CCD" />
            <Column field="band" header="Band" />
            <Column field="exptime" header="Exposure Time" />
        </DataTable>
        {/* <Table 
          numRows={10}
            enableColumnReordering={true}
            selectionModes={RegionCardinality.ROWS_ONLY}
            >
            <Column name="Date time" />
            <Column name="Nite" />
            <Column name="Exposure" />
            <Column name="CCD" />
            <Column name="Band" />
        </Table> */}
      </div>
    );
  }
}

export default HomeTable;
