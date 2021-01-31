module.exports = {
    views: (req,res) => {
        res.send({
            items:req.session.items || 0,
            item:req.session.itemRandom || 0
        });
    }
};