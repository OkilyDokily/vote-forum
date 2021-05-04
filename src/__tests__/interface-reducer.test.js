import reducer from '../reducers/interface-reducer'

describe("interface",()=>{
  test("interface view",()=>{
    const result = reducer(undefined,{type:"VIEW", view:"JUNK"} );
    expect(result.view).toEqual("JUNK");
  });

  test("show user details", () => {
    const user = {
      name: "jan",
      posts: [2],
      votes: {
        2: "up",
        3: "up",
        4: "down"
      }
    }
    const result = reducer(undefined, { type: "USERDETAILS", user: user});
    expect(result.userDetails).toEqual(user);
  });
});