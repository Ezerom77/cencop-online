const usersController = {
    index: (req,res) => {
        res.render('./users/index',{title:'CENCOP Online'});
    }
}

module.exports = usersController;

