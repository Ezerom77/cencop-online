const mainController = {
    index: (req,res) => {
        res.render('index',{title:'CENCOP Online'});
    }
}

module.exports = mainController;

