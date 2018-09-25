import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Column } from "@blueprintjs/table";
import {DataTable} from 'primereact/datatable'; 
import { Button } from 'primereact/button';
import {ExposureApi} from './ExposureApi';
import PropTypes from 'prop-types';
class CCDTable extends Component {
  state = this.initialState;
  api = new ExposureApi();

  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.any.isRequired,
  };

  get initialState() {
    return {
      data:[],
      totalSize: 0,
      page: 1,
      sizePerPage: 100,
      loading: false,
      sortField: 'nite',
      sortOrder: 1,      
    };
  }

  columns = [
    {
      field: 'nite',
      header: 'Nite',
      sortable: true,
    },
    {
      field: 'expnum',
      header: 'Exposure',
      sortable: true,
    },    
    {
      field: 'ccdnum',
      header: 'CCD',
      sortable: true,
    },    
    {
      field: 'band',
      header: 'Band',
      sortable: true,
    },        
    // {
    //   field: 'filename',
    //   header: 'Filename',
    //   sortable: true,
    // },    
  ]

  componentDidMount() {

    const {
      match: { params },
    } = this.props;

    this.fetchData(this.state.page, this.state.sizePerPage, parseInt(params.expnum, 10));
  }

  fetchData = (page, sizePerPage, expnum) => {
    this.setState({ loading: true });

    const filters = [{
      property:'expnum',
      value: expnum
    }]

    this.api.getCCDsByExposure({ page: page, pageSize: sizePerPage, filters: filters }).then(res => {
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

  onView = row_id => {
    console.log('onView', row_id)
    // this.props.view_asteroid(asteroid_id);
    const history = this.props.history;
    history.push({ pathname: `/image/${row_id}` });    
  };

  actionTemplate = rowData => {
    const row_id = rowData.id;
    let btn_view = null;

    btn_view = (
      <Button
        type="button"
        label="View"
        className="ui-button-info"
        title="View"
        onClick={() => this.onView(row_id)}
      />
    );


    return (
      <div>
        {btn_view}
      </div>
    );
  };

  render() {


    const columns = this.columns.map((col, i) => {
      return (
        <Column
          key={i}
          field={col.field}
          header={col.header}
          sortable={col.sortable}
          style={col.style}
          body={col.body}
        />
      );
    });

    return (
      <div>
        <DataTable
          value={this.state.data}
          resizableColumns={true}
          columnResizeMode="expand"
          reorderableColumns={false}
          reorderableRows={false}
          responsive={true}
          scrollable={true}
          loading={this.state.loading}
          totalRecords={this.state.totalSize}
          // sortField={this.state.sortField}
          // sortOrder={this.state.sortOrder}
          // onSort={this.onSort}
        >
          <Column
            body={this.actionTemplate}
            style={{ textAlign: 'center', width: '6em' }}
          />        
          {columns}
        </DataTable>       
      </div>
    );
  }
}

export default withRouter(CCDTable);
