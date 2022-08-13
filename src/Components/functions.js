
const fetchData = (setData) => {
    const APIurl = "https://tribally.xyz/leaderboard/origin/arena";
    fetch(APIurl)
    .then((response) => response.json())
    .then((respData) => {
      setData(respData);
      setLoading(false);
    })
    .catch((error) => {
      setError(error);
    });
}

export default fetchData;
