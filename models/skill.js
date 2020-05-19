const skills = [
    {id: 0, skill: 'HTML', learned: true},
    {id: 1, skill: 'CSS', learned: true},
    {id: 2, skill: 'JavaScript', learned: true},
    {id: 3, skill: 'jQuery', learned: true},
    {id: 4, skill: 'Node.js', learned: false},
    {id: 5, skill: 'MongoDB', learned: false},
    {id: 6, skill: 'MongooseJS', learned: false},
];

module.exports = {
    getAll, 
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}