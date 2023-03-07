const express = require('express');

const router = express.Router();

const Dashboard = require('../models/dashboard');


// post

router.post( '/ajout' , ( req , res )=>{
   
    let data = req.body;

    let d = new Dashboard( data );
        
    d.save()  // l'objet eli tsajel fl base 
        .then(
            (savedProd)=>{
                res.send(savedProd);
            }
        )
        .catch(
            (err)=>{
               res.send(err)
            }
        )

} );

// get

router.get( '/all' , (req , res)=>{

    // find() => [  ]
    // findOne()  findById() => { }
    Dashboard.find()
        .then(
            ( Dashboards )=>{
                res.send( Dashboards );
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )

} )




router.get('/getbyid/:id' , (req, res)=>{

    let myId = req.params.id;

    Dashboard.findById( { _id: myId } )
        .then(
            (result)=>{
                res.send(result);
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )

})





// delete
router.delete('/supp/:id' , (req , res)=>{
    
    let myId = req.params.id;

    Dashboard.findByIdAndDelete({ _id : myId })
        .then(
            (result)=>{
                res.send(result);
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )


})



// put
router.put('/update/:id' , (req , res)=>{

    let id = req.params.id;

    let newData = req.body;

    Dashboard.findOneAndUpdate( { _id: id } , newData )
        .then(
            ( updated )=>{
                res.send(updated)
            }
        )
        .catch(
            (err)=>{
                res.send(err)
            }
        )
    
} )



module.exports = router;