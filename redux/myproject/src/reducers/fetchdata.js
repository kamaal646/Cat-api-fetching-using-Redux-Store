export const fetchdata = (state = [ { } ], action) => {
  switch (action.type) {
    case "FETCHDATA":
      return action.payload;

    case "ERROR":
      return action.payload;

    default:
      return state;
      
  }
};
