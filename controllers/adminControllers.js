import {con} from "../index.js";

export const getAdminDetails = async (req,res) =>{

    let query=`SELECT * FROM details`;


    con.query(query, function (err, result) {
        if (err) throw err;
        return res.status(200).json({users:result});
       
      });
}

export const getAdminDetails1 = async (req,res) =>{

  let query=`SELECT * FROM Orderitem`;


  con.query(query, function (err, result) {
      if (err) throw err;
      return res.status(200).json({result});
     
    });
}

