let sauces = []
let id = 0

module.exports = {
    read: (req, res) => {
        res.status(200).send(sauces)
    },
    create: (req, res) => {
        // const { name, region } = req.body
        sauces.push({
            id: id,
            name: req.body.name,
            region: req.body.region,
        })
        id++
        req.status(200).send(sauces)
    },
    update: (req, res) => {
        let index = null;
        sauces.forEach((sauce, i) => {
            if (sauce.id === Number(req.params.id)) index = i;
        });
        sauces[index] = {
            id: sauces[index].id,
            name: req.body.name || sauces[index].name,
            region: req.body.region || sauces[index].region
        };
        res.status(200).send(sauces)
    },
    delete: (req, res) => {
        let index = null;
        sauces.forEach((sauce, i) => {
            if (sauce.id === Number(req.params.id)) index = i;
        });
        sauces.splice(index, 1);
        res.status(200).send(sauces);
    }
}