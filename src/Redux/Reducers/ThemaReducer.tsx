export interface I_ThemaReducer {
  navPosition?: "top" | "start" | "end",
  container?: "container-fluid" | "container",
  menuType?: "fixed" | "iconable"
};
export type I_ThemaAction = "thema/setThema";
const initalState = (): I_ThemaReducer => {
  return {
    navPosition: "start",
    container: "container-fluid",
    menuType: "iconable"
  }
};

export const ThemaReducer = (state: I_ThemaReducer = initalState(), action: { type: I_ThemaAction, state: any }) => {

  switch (action.type) {
    case "thema/setThema":
      return {
        ...state,
        ...action.state
      };
    default:
      return state;
  }
}
export default ThemaReducer;