initialState = () => {
  return {
    data: {
      mana: {
        black: 1,
        blue: 2,
        green: 3,
        red: 4,
        white: 5,
      },
      status: "check",
    },
  };
};
//  naar res
const res = initialState();
console.log(res);

//deconstruct
const {  data: { mana },  status,} = initialState();
console.log(mana, status);

