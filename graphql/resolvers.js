import { getById, people } from "./db.js";

// const gapjin = {
//     name: "Gapjin",
//     age: 35,
//     gender: "male"
// };

// const resolvers = {
//     Query: {
//         // name: () => "gapjin"
//         person: () => gapjin
//     }
// };


const resolvers = {
    Query: {
        people: () => people,
        person: (_, { id }) => getById(id)
    }
};

export default resolvers;