export const people = [
    {
        id: "0",
        name: "Gapjin",
        age: 35,
        gender: "male"
    },
    {
        id: "1",
        name: "Daal",
        age: 18,
        gender: "male"
    },
    {
        id: "2",
        name: "JD",
        age: 20,
        gender: "male"
    },
    {
        id: "3",
        name: "flynn",
        age: 31,
        gender: "female"
    },
    {
        id: "4",
        name: "Alex",
        age: 28,
        gender: "male"
    },
    {
        id: "5",
        name: "mari",
        age: 26,
        gender: "female"
    },
    {
        id: "6",
        name: "heajin",
        age: 26,
        gender: "female"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}