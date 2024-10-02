
const getUsers = (req, res) => {


    const shop = [{
        id: 1,
        price: 30,
        name: 'laptop1'
    },
    {
    id: 2,
    price: 30,
    name: 'laptop2'
},
{
    id: 3,
    price: 47,
    name: 'laptop3'}
]
    res.json(shop);
};

export {
    getUsers
}