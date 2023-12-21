// first function should be getting the finished api (the api already containing the user and the score)
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/owQWvuBZRBl6oZNoQKqG/scores/'; //API
/** first function to generate the API */
const GetScores = async () => {
    const getScores = await fetch (url).then((res) => res.json());
    return getScores;
};
// second function should be abou the generation of data through the input
/** second function to generate the API through input */

const NewApiGame = async () =>{
    const name = document.getElementById("name");
    const score = document.getElementById("score");

    await fetch(url, {
        method: 'POST',
        headers: {
            'content-Type': 'application/json',
        },
        body: JSON.stringify({
            user:name.value,
            score:score.value
        })
    });
};
