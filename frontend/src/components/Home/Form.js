import React, { Component } from 'react';
import { Card, Elevation, Button, FormGroup, InputGroup, MenuItem} from '@blueprintjs/core'
import { Select } from "@blueprintjs/select";
import { DateRangeInput } from "@blueprintjs/datetime";
import { DateRangePicker } from "@blueprintjs/datetime";
import moment from "moment";
class HomeForm extends Component {
  state = this.initialState;

  get initialState() {
    return {
      // Praia Run recem criado e que esta em andamento ainda
      startDate: null,
      endDate: null,
    };
  }

  itemRenderer = (item) => {
    return (
    <MenuItem
            active={true}
            disabled={false}
            label={item.text}
            key={item.data}
            // onClick={handleClick}
            text={item.text}
        />
    )
  }

  handleChangeInterval = (value) => {
    this.setState({
      startDate: value[0],
      endDate: value[1],
    })
  }

  render() {
    return (
      <div>
        <FormGroup
          label="Date Period"
          labelFor="inp-date-period"
        >
        <div className="bp3-select">
          <select >
            <option value="1">Night</option>
            <option value="2">Week</option>
            <option value="3">Month</option>
            <option value="4">Semester</option>
            <option value="4">Year</option>
          </select>
        </div>      
          {/* <InputGroup id="inp-date-period" placeholder="Placeholder text" /> */}
          {/* <Select id="inp-date-period" 
            items={[{data:'1', text:'teste'}]}
            itemRenderer={this.itemRenderer}
            >
          </Select> */}
        </FormGroup>
        
        <FormGroup
          label="Date Range"
          labelFor="inp-date-range"
        >      
          <DateRangeInput id="inp-date-range"
            formatDate={date => moment(date).format("YYYY-MM-DD")}
            // onChange={this.handleRangeChange}
            parseDate={str => moment(str, "YYYY-MM-DD").toDate()}
            value={[this.state.startDate, this.state.endDate]}
            onChange={this.handleChangeInterval}
          />
        </FormGroup>
        <Button>Submit</Button>
      </div>
    );
  }
}

export default HomeForm;
