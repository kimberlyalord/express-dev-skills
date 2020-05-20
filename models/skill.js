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
    getOne,
    create,
    deleteOne,
};

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function create(skill) {
    skill.id = skills.length;
    skill.learned = false;
    skills.push(skill);
    console.log(skills);
}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}