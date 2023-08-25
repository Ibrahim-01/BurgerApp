import React from "react";
import Aux from "../../hoc/Auxi";
import classes from "./Layout.module.css"

const layout = (props) => {
  return <Aux>
    <p>toolbar, side drawer nav elements</p>

    <main className={classes.Content}>{props.children}</main>

  </Aux>
}

export default layout;