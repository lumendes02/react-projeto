import P from 'prop-types';
import React from "react";

import './styles.css'

// export class Button extends Component {
//     render() {
//         const {text, onClick, disabled} = this.props;
//         return(
//             <button disabled={disabled} className="button" onClick={onClick}>
//                 {text}
//             </button>
//         )
//     }
// }

export const Button = ({text, onClick, disabled = false}) => (
    <button disabled={disabled} className="button" onClick={onClick}>
    {text}
  </button>
);

Button.defaultProps = {
  disabled: false,
};


Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled: P.bool,
}
