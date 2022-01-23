const gapjin = {
    name: "Gapjin",
    age: 35,
    gender: "male"
};

const resolvers = {
    Query: {
        // name: () => "gapjin"
        person: () => gapjin
    }
};

export default resolvers;