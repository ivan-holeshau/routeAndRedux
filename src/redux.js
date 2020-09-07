const initionalState = { menu: ["milk", "cofe", "meat1"], isAdd:false };

export default function rootReducer(state = initionalState, action) {
  if (action.type === "add") {
    const menu = state.menu;
    menu.push(action.payload.ref.current.value);
    action.payload.ref.current.value = "";
    return {
      menu: menu,
    };
  }

  console.log("create state");
  return state;
}
