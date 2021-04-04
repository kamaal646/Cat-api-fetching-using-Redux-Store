import axios from "axios";

export const options = () => {
  return (dispatch) => {

    axios.get("https://api.publicapis.org/entries")
      .then((response) => {
        const fetch = response.data.entries;
        console.log("fetch...",fetch);
        dispatch({
          type: "FETCHDATA",
          payload: fetch,
        });
      })
      .catch(( err) => {
          dispatch( {
              type: 'ERROR',
              payload: err.message
          })
      })
      
  };
};
