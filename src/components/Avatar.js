import React from 'react';
import MUIAvatar from '@material-ui/core/Avatar';
import titleInitials from "../utils/title-initials";
import randColor from '../utils/color-from';


const Avatar = ({colorFrom, children, ...rest}) => (
  <MUIAvatar style={{backgroundColor: randColor(colorFrom)}} {...rest}>
    {titleInitials(children)}
  </MUIAvatar>
);

export default Avatar;
