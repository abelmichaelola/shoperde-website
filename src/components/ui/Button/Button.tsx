import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

type Props = {
  type?: BUTTON_TYPES;
  text?: string;
  leftIcon?: string;
  rightIcon?: string;
  visibility?: string;
  link?: string;
};
type State = {
  view:any;
};

class Button extends React.Component<Props, State> {
  constructor(props:Props){
super(props);
this.state = {
  view: (
        <Link to={this.props.link? this.props.link:"/"}>
          <div className={styles.Btn + " " + getStyle(this.props.type)}>
            {this.props.text}
          </div>
        </Link>)

}
  }
  render() {
    
      return (this.state.view);
  }
}
enum BUTTON_TYPES {
  TYPE_1,
  TYPE_2,
  TYPE_3,
  TYPE_4,
  TYPE_5,
}

function getStyle(buttonType: any) {
  switch (buttonType) {
    case BUTTON_TYPES.TYPE_1:
      return styles.Button1;
    case BUTTON_TYPES.TYPE_2:
      return styles.Button2;
    case BUTTON_TYPES.TYPE_3:
      return styles.Button3;
    case BUTTON_TYPES.TYPE_4:
      return styles.Button1_bordered;
    default:
      break;
  }
}
export { BUTTON_TYPES, Button };
