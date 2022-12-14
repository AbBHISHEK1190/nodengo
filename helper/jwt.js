const dotenv=require('dotenv');
const express=require('express')
const jsonwebtoken=require('jsonwebtoken');


const createtoken=(req,resdd,qa)=>{

    return 'a' +   (req+resdd+qa);

}



module.exports={createtoken}

