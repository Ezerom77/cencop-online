const usersController = {
    index: (req,res) => {
        res.render('./users/index',{title:'CENCOP Online'});
    },
    registro: (req, res) => {
        res.render('./users/registro', { title: 'Registro' })
    },
    created:(req, res)=>{
        res.send('Te registraste!! esto sigue pendiente')
    }
}

module.exports = usersController;

