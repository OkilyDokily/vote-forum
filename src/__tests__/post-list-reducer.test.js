import reducer from "../reducers/post-list-reducer"

describe("general list", () => {

  test("get_result", () => {

    const result = reducer(undefined, {
      type: "ADD",
      id: 5,
      title: "Excite",
      url: "Excite.com",
      userid: 3,
      date: new Date('December 17, 1995 03:24:00')
    })

    expect(result).toEqual({
      "loggedIn": 1,
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
        },
        5: {
          id: 5,
          title: "Excite",
          url: "Excite.com",
          userid: 3,
          rate: 0,
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
    });
  });

  test("get_result_increase_vote", () => {
    const result = reducer(undefined, {
      type: "ADD",
      id: 5,
      title: "Excite",
      url: "Excite.com",
      userid: 3,
      date: new Date('December 17, 1995 03:24:00')
    });
    const result2 = reducer(result, { type: "VOTE", id: 5, userid: 2, arrow: "up" });

    expect(result2).toEqual({
      "loggedIn": 1,
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
        },
        5: {
          id: 5,
          title: "Excite",
          url: "Excite.com",
          userid: 3,
          rate: 1,
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
            4: "down",
            5: "up"
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
    });
  })
})