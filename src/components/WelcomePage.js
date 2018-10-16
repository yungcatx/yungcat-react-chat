import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Emoji from 'react-emoji-render';
import SimpleHeader from './SimpleHeader'


const styles = theme => ({
  grid: {
    display: 'grid',
    gridTemplateRows: "10% 1fr 1fr",
    gridTemplateColumns: "1fr",
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.default,
    gridTemplateAreas: `
      'header'
      'content'
      'footer'   
    `
  },
  header: {
    display: 'grid',
    gridArea: 'header',
  },
  headerLayout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: '10px',
    alignItems: 'center',
    alignContent: 'space-between',
  },
  welcomeTextStyle: {

  },
  content: {
    display: 'grid',
    gridArea: 'content',
    gridTemplateRows: '30vh 1fr auto',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateAreas: `
           ' . . . '
        ' . welcome . '
           ' . . . '
    `,
  },
  welcomeContainer: {
    gridArea: 'welcome',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  footer: {
    display: 'grid',
    gridArea: 'footer',
    gridTemplateRows: '1fr',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateAreas: `
        '. button . '
    `,
  },
  button: {
    margin: theme.spacing.unit,
  },
  buttonContainer: {
    gridArea: 'button',
    alignContent: 'center',
    justifySelf: 'center'
  },
});

class WelcomePage extends React.Component {
  render() {
    const {classes} = this.props;

    return(
      <div className={classes.grid}>
        <div className={classes.header}>
          <SimpleHeader />
        </div>
        <div className={classes.content}>
          <div className={classes.welcomeContainer}>
            <h1>Welcome <Emoji text="🎉"/></h1>
            <h3>React Chat is the fast chat</h3>
          </div>
        </div>
        <div className={classes.footer}>
          <div className={classes.buttonContainer}>
            <Button variant="contained"
                    color="primary"
                    className={classes.button}
                    size="large"
                    component={Link}
            to="/auth">
              Explore
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(WelcomePage)
