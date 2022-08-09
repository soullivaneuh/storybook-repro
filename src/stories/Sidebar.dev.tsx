import React, {
  VFC,
} from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from '@mui/material';

export const SidebarContent: VFC = () => (
  <List
    subheader={(
      <ListSubheader component="div" id="nested-list-subheader">
        Sub header
      </ListSubheader>
    )}
  >
    <ListItem button>
      <ListItemText primary="Sidebar item" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Custom sidebar button" />
    </ListItem>
    <ListItem button selected>
      <ListItemText primary="Selected element" />
    </ListItem>
    <ListItem
      button
    >
      <ListItemText primary="With icon" />
    </ListItem>
    <ListItem
      button
    >
      <ListItemText primary="With badge icon" />
    </ListItem>
  </List>
);

export default null;
