import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Profile from "../../pages/Profile";
import Favorites from "../../pages/Favorites";
import Checkout from "../../pages/Checkout";
import "./DashboardNav.css";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class DashboardNav extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar style={{backgroundColor: "#355C7D"}} position="static">
          <Tabs centered value={value} onChange={this.handleChange}>
            <Tab label="Profile" />
            <Tab label="My Favorites" />
            <Tab label="Billing Info" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><Profile /></TabContainer>}
        {value === 1 && <TabContainer><Favorites /></TabContainer>}
        {value === 2 && <TabContainer><Checkout /></TabContainer>}
      </div>
    );
  }
}

DashboardNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardNav);