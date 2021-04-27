export default function reducer(state ={ },action){
  switch(action.type){
    case "ADD":
      state[action.id] = {title:action.title,url:action.url, id: action.id,rate:action.rate};
    return {...state}
    case "VOTE":
      if(action.arrow === "up"){
        state[action.id].rate++;
        return {...state}
      }
    default:
      return state
  }

}