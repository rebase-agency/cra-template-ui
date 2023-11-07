import React, {JSX} from "react";
import classes from './Component.module.css'

export interface ComponentProps {
  children: JSX.Element
}

export const Component = ({ children }: ComponentProps) => {
  return <div className={classes.Component}>{children}</div>
}
