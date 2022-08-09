import React, {
  FC,
} from 'react';
import {
  SwipeableDrawer,
  Toolbar,
  SwipeableDrawerProps,
} from '@mui/material';

const drawerWidth = '250px';

export type SideBarProps =
& Pick<
  SwipeableDrawerProps,
  | 'open'
  | 'onOpen'
  | 'onClose'
>
& {
  children?: React.ReactNode;
}

export const Sidebar: FC<SideBarProps> = ({
  open,
  onOpen,
  onClose,
  children,
}) => {
  return (
    <SwipeableDrawer
      data-testid="sidebar"
      elevation={1}
      anchor="left"
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      onClick={onClose}
    >
      {/* @see https://mui.com/components/drawers/#clipped-under-the-app-bar */}
      <Toolbar />
      {children}
    </SwipeableDrawer>
  );
};

export default null;
