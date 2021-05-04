export default function reducer (state = {view:"default",userDetails:undefined}, action) {
  switch (action.type) {
    case 'VIEW':
      return {...state,view:action.view};
    case 'USERDETAILS':
      return {...state,userDetails:action.user};
    default:
      return state;
  }
};