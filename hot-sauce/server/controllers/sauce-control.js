const SampleSauce = [
    {
        id: 1,
        name: "Sauce 1",
        region: "North America"

    },
    {
        id: 2,
        name: "Sauce 2",
        region: "South America"
    },
    {
        id: 3,
        name: "Sauce 3",
        region: "Europe"
    },
    {
        id: 4,
        name: "Sauce 4",
        region: "Asia"
    },
    {
        id: 5,
        name: "Sauce 5",
        region: "Australia"
    },
    {
        id: 6,
        name: "Sauce 6",
        region: "Africa"
    },
    {
        id: 7,
        name: "Sauce 7",
        region: "Antarctica"
    }
];

let id = 8;

module.exports = {
    getSauces: (req, res) => {
        res.status(200).send(SampleSauce)
    },

    addSauce: (req, res) => {
        // const { name, region } = req.body;
        let {
            id,
            name,
            region,
        } = req.body;
        let newSauce = {
            id,
            name,
            region
        };
        id++
        SampleSauce.push(newSauce);
        req.status(200).send(SampleSauce)
    },

    editSauce: (req, res) => {
        let { id } = req.params;
        let {
            name,
            region
        } = req.query;

        let index = SampleSauce.findIndex(sauce => sauce.id === +id);


        SampleSauce[index].name = name;
        SampleSauce[index].region = region;

        res.status(200).send(SampleSauce);
    },

    deleteSauce: (req, res) => {
        let { id } = req.params;
        SampleSauce.findIndex(sauce => sauce.id === +id);
        index !== SampleSauce.splice(index, 1);
        res.status(200).send(SampleSauce);
    }
}