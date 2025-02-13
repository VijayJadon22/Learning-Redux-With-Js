import data from "../data.js"
export const getTodos = (req, res) => {
    return res.json(data);
}