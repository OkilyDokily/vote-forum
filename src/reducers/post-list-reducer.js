export const defaultState = {
  loggedIn: 1,
  posts: {
    1: {
      id: 1,
      title: "Google",
      url: "google.com",
      userid: 1,
      rate: 3,
      date: new Date('December 17, 1995 03:24:00')
    },
    2: {
      id: 2,
      title: "Alta Vista",
      url: "altavista.com",
      userid: 2,
      rate: -3,
      date: new Date('December 17, 1995 03:24:00')
    },
    3: {
      id: 3,
      title: "Lycos",
      url: "lycos.com",
      userid: 3,
      rate: 2,
      date: new Date('December 17, 1995 03:24:00')
    },
    4: {
      id: 4,
      title: "Ask Jeeves",
      url: "askjeeves.com",
      userid: 3,
      rate: 5,
      date: new Date('December 17, 1995 03:24:00')
    }
  },
  users: {
    1: {
      name: "jan",
      posts: [2],
      votes: {
        2: "up",
        3: "up",
        4: "down"
      }
    },
    2: {
      name: "jill",
      posts: [1],
      votes: {
        1: "up",
        3: "up",
        4: "down"
      }
    },
    3: {
      name: "mark",
      posts: [3, 4],
      votes: {
        1: "up",
        2: "down",
      }
    }
  }
}


export default function reducer(state = defaultState
  , action) {

  function returnVote(direction, result) {
    const newRate = state.posts[action.id].rate + direction;
    const votes = state.users[action.userid].votes;

    return { loggedIn: 1, posts: { ...state.posts, [action.id]: { ...state.posts[action.id], rate: newRate } }, users: { ...state.users, [action.userid]: { ...state.users[action.userid], votes: { ...votes, [action.id]: result } } } };
  }

  switch (action.type) {
    case "ADD":
      const user = state.users[action.userid]
      const posts = state.users[action.userid].posts;
      posts.push(action.id);
      const statePost = { title: action.title, url: action.url, rate: 0, userid: action.userid, id: action.id, date: action.date };
      return { loggedIn: 1, posts: { ...state.posts, [action.id]: statePost }, users: { ...state.users, [action.userid]: { ...user, posts: posts } } }
    case "VOTE":
      if (action.arrow === "up" && state.users[action.userid].votes[action.id] === "down") {
        return returnVote(1, undefined);
      }
      else if (action.arrow === "down" && state.users[action.userid].votes[action.id] === "up") {
        return returnVote(-1, undefined);
      }
      else if (action.arrow === "up" && state.users[action.userid].votes[action.id] !== "up") {
        return returnVote(1, "up");
      }
      else if (action.arrow === "down" && state.users[action.userid].votes[action.id] !== "down") {
        return returnVote(-1, "down");
      }
      return state;
    default:
      return state
  }
}