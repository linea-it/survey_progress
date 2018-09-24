import React, { Component } from 'react';
import { Button, FormGroup, MenuItem} from '@blueprintjs/core'
import { DateRangeInput } from "@blueprintjs/datetime";
import moment from "moment";
import { Alignment, Checkbox, Label, Switch } from "@blueprintjs/core";

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
        {/* <FormGroup
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
        </FormGroup> */}
        
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

        <FormGroup
          label="Band"
          labelFor="inp-band"
        >      

          <Checkbox alignIndicator={Alignment.LEFT} disabled={false} inline={true} large={false} label="g" defaultIndeterminate={false} />
          <Checkbox alignIndicator={Alignment.LEFT} disabled={false} inline={true} large={false} label="r" defaultIndeterminate={false} />
          <Checkbox alignIndicator={Alignment.LEFT} disabled={false} inline={true} large={false} label="i" defaultIndeterminate={false} />
          <Checkbox alignIndicator={Alignment.LEFT} disabled={false} inline={true} large={false} label="z" defaultIndeterminate={false} />
          <Checkbox alignIndicator={Alignment.LEFT} disabled={false} inline={true} large={false} label="Y" defaultIndeterminate={false} />
        </FormGroup>

        <Button>Submit</Button>
      </div>
    );
  }
}

export default HomeForm;
