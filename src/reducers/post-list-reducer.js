export const defaultState = {
  posts: {
    1: {
      id: 1,
      title: "Google",
      url: "google.com",
      userid: 1,
      rate: 3
    },
    2: {
      id: 2,
      title: "Alta Vista",
      url: "altavista.com",
      userid: 2,
      rate: -3
    },
    3: {
      id: 3,
      title: "Lycos",
      url: "lycos.com",
      userid: 3,
      rate: 2
    },
    4: {
      id: 4,
      title: "Ask Jeeves",
      url: "askjeeves.com",
      userid: 3,
      rate: 5
    }
  },
  users: {
    1: {
      name:"jan",
      posts: [1],
      votes: {
        2: "up",
        3: "up",
        4: "down"
      }
    },
    2: {
      name:"jill",
      posts:[1],
      votes: {
        1: "up",
        3: "up",
        4: "down"
      }
    },
    3: {
      name:"mark",
      posts: [3,4],
      votes: {
        1: "up",
        2: "down",
      }
    }
  }
}



export default function reducer(state = defaultState
, action) {
  switch (action.type) {
    case "ADD":
      state.posts[action.id] = { title: action.title, url: action.url, id: action.id, rate: 0, userid: action.userid };
      state.users[action.userid].posts[action.id] = "";
      return { ...state }
    case "VOTE":
      if (action.arrow === "up" && state.users[action.userid]?.vote !== "up") {
        state.posts[action.id].rate++;
        state.users[action.userid].votes[action.id] = "up";
      
        return {...state };
      }
      else if (action.arrow === "down" && state[action.id]?.vote !== "down") {
        state.posts[action.id].rate--;
        state.users[action.userid].votes[action.id] = "down";

        return { ...state };
      }
      return state;
    default:
      return state
  }
}