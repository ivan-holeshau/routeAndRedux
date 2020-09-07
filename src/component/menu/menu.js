import React from "react";
import ItemMenu from "./ItemMenu/ItemMenu";
import { connect } from "react-redux";
class Menu extends React.Component {
  render() {
    return (
      <div>
        <h1>menu</h1>
        {this.props.menu.map((item, index) => (
          <ItemMenu key={index} name={item} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu,
  };
}

export default connect(mapStateToProps)(Menu);
