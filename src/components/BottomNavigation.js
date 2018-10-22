import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import RestoreIcon from "@material-ui/icons/Restore";
import ExploreIcon from "@material-ui/icons/Explore";

const styles = theme => ({
  bottomNavigationContainer: {
    gridArea: "bottomnavigation"
  },
  bottomNav: {
    height: '100%',
    width: "320px"
  },
});

const BottomNav = ({classes}) => (
  <div className={classes.bottomNavigationContainer}>
    <BottomNavigation showLabels className={classes.bottomNav}>
      <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
    </BottomNavigation>
  </div>
);


// class BottomNavigation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeTab: 0
//     }
//   }
//
//   handleTabChange = (event, value) => {
//     this.setState({
//       activeTab: value,
//     })
//   }
//
//   render() {
//     const {classes} = this.props;
//     const { activeTab, }
//
//     return (
//       <div className={classes.bottomNavigationContainer}>
//         <BottomNavigation showLabels className={classes.bottomNav}>
//           <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
//           <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
//         </BottomNavigation>
//       </div>
//     );
//   }
//
// }

export default withStyles(styles)(BottomNav)
