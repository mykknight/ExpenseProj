const Expens = require('../Model/expens');

exports.Addex = async (req,res,next) => {
    const Amount = req.body.expense;
    const Description = req.body.description;
    const Category = req.body.option;

    const data = await Expens.create({
        Amount: Amount,
        Description: Description,
        Category: Category
    });
    res.status(215).json({newEx: data});
}

exports.GetExp = (req,res,next) => {
    Expens.findAll()
    .then(expens => {
        res.status(225).json(expens);
    })
    .catch(err => console.log(err));
}

exports.DltExp = async (req,res,next) => {
    const id = req.params.prodID;
    console.log(id);
    Expens.destroy({where: {id: id}});
    res.status(235).json();
}

exports.EdtExp = async (req,res,next) => {
    const id = req.params.prodID;
    Expens.findByPk(id)
    .then((exp) => {
        exp.Amount = req.body.expense;
        exp.Description = req.body.description;
        exp.Category = req.body.option;
        exp.save();
        res.status(245).json({edtexp: exp});
    })
    .catch(err => console.log(err));
}