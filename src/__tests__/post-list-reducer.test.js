import reducer from "../reducers/post-list-reducer"

describe("general list",()=>{
 
  test("get_result",()=>{
    const post = { id:1, url:"google.com", title: "Google",rate:0 }

    const result = reducer({}, {
      type: "ADD",
      id: 1,
      title:"Google",
      url: "google.com",
      rate:0
    })
    expect(result).toEqual({1:post});
  })

  test("get_result_increase_vote", () => {
    //const post = { id: 1, url: "google.com", title: "Google", rate: 0 }

    const result = reducer({}, {
      type: "ADD",
      id: 1,
      title: "Google",
      url: "google.com",
      rate: 0
    })
    const result2 = reducer(result,{type:"VOTE",id:1,arrow:"up"})
    expect(result2.rate).toEqual(1);
  })
})