import {con} from "../index.js";

export const login = async (req,res) =>{
    const {id, password} = req.body;
    console.log(req.body);
    let query=`SELECT * FROM User WHERE id=${id}`;


    con.query(query, function (err, result) {
        if (err) throw err;
        if(result.length>0 && result[0].password===password)
        {
            return res.status(200).json({message:"Login Successful",user:result});
        }
        else{
            return res.status(400).json({message:"Incorrect Password"});
        }
       
      });
}

export const forgotpass = async (req,res) =>{
    const {phone_number , password} = req.body;
    console.log(req.body);
    let query=`SELECT * FROM User WHERE phone_number=${phone_number}`;


    con.query(query, function (err, result) {
        if (err) throw err;
        if(result.length>0)
        { 
            const query=`UPDATE User SET password='${password}' WHERE phone_number=${phone_number}`;
            con.query(query,function(err,result){
                if(err) throw err;
                return res.status(200).json({message:"Password Changed Successfully",user:result});
            });
        }
        else{
            return res.status(400).json({message:"Incorrect Password"});
        }
      });
}

export const getDetail = async (req,res) =>{
    const {order_date,item,count,weight,requests,user_id} = req.body;
    console.log(req.body);
    let query=`INSERT INTO Orderitem(order_date,item,count,weight,requests,user_id) VALUES('${order_date}','${item}','${count}','${weight}','${requests}',${user_id})`;


    con.query(query, function (err, result) {
        if (err) throw err;
        console.log(result);
        if(result)
        {
            return res.status(200).json({message:"Data Inserted Successfully",user:result});
        }
        else{
            return res.status(400).json({message:"Unable To Insert Data"});
        }
       
      });
}

export const getOrders = async (req,res) =>{
    const user_id=req.query.user_id;
    let query=`SELECT * FROM Orderitem WHERE user_id=${user_id}`;


    con.query(query, function (err, result) {
        if (err) throw err;
        if(result.length>0)
        {
            console.log(result);
            return res.status(200).json({message:"Data Found",result});
        }
        else{
            return res.status(400).json({message:"No Data Found"});
        }
       
      });
}

export const getDetails = async (req,res) =>{
    const {id, orderDate,company,owner,item,quantity,weight,reqForShipment,trackingId,shipmentSize,boxCount,specification,checklistQuantity} = req.body;
    console.log(req.body);
    let query=`INSERT INTO details(ID, OrderDate, Company, Owner, Item, Quantity, Weight, RequestForShipment,TrackingID, ShipmentSize, BoxCount, Specification, ChecklistQuantity) VALUES (?)`;

    var values=[
        [id, orderDate,company,owner,item,quantity,weight,reqForShipment,trackingId,shipmentSize,boxCount,specification,checklistQuantity]
    ];
    con.query(query,values, function (err, result) {
        if (err) throw err;
        console.log(result);
        return res.status(200).json({message:"Details Saved Successfully"});
      });
}