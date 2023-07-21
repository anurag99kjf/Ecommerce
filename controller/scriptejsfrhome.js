const path=require('path');

module.exports=function(req,res){
    
    const filePath = path.join(__dirname, '../views/script/script.js');
    res.sendFile(filePath);
}