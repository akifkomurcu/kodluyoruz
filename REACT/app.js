import axios from "axios";
async function DataF(Number) {

    const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + Number)
    const { data: post } = await axios("https://jsonplaceholder.typicode.com/posts?userId=1&Id=" + Number)

    return { "user": user, "post": post }
}


export default DataF;