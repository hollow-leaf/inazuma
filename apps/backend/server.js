import { createRequire } from 'module';
import { add_asset } from './src/co2storage/add_asset.js';
import { sign_cid } from './src/co2storage/sign_cid.js';
import { search_asset, search_proven } from './src/co2storage/search.js';
import { buy_power } from './src/buy_power.js';
import { fetch_cert_address } from './src/hypercert/hypercert.js';
import { mint_hypercert } from './src/blockchain/blockchain.js';
import cors from 'cors';


const require = createRequire(import.meta.url);

var express = require('express');
var app = express();

const cors_strict = {
    "origin": "https://hollowleaf.dev/inazuma, localhost",
    "methods": "GET,POST",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }
app.use(express.json())
app.use(cors(cors_strict));
 
app.post('/add_asset', function (req, res) {
    const req_data = req.body
    console.log("add_asset_req:")
    console.log(req_data)
    try{
        //kw, provider, date, type, location
        add_asset(req_data.capacity, req_data.provider, req_data.date, req_data.type, req_data.location).then(asset_res=>{
            console.log("Asset respond:")
            console.log(asset_res.result.asset[5].file)
            //cid
            sign_cid(asset_res.result.assetBlock.cid).then(sign_res=>{
                console.log("Sign respond:")
                console.log(sign_res)
                //smartcontract call
                mint_hypercert(asset_res.result.asset[5].file[0].cid, req_data.capacity, req_data.provider).then(()=>{
                    res.json(sign_res)
                })
            }).catch(err=>{ 
                console.log(err)
            })
        }).catch(err=>{
            console.log(err)
        })
    }catch(err){
        console.log(err)
    }
})

app.post('/buy_power', function (req, res) {
    const req_data = req.body
    console.log("buy_power_req:")
    console.log(req_data)
    try{
        buy_power(Number(req_data.amount)).then(rres=>{
            res.send(rres)
        }).catch(err=>console.log(err))
    }catch(err){
        console.log(err)
    }
})

app.post('/asset', function (req, res) {
    const req_data = req.body
    console.log("asset_req:")
    console.log(req_data)
    try{
        search_asset(req_data.address).then(rres=>{

            res.send(rres)
        })
    }catch(err){
        console.log(err)
    }
})
 
app.post('/cert', function (req, res) {
    const req_data = req.body
    console.log("cert_req:")
    console.log(req_data)
    try{
        fetch_cert_address(req_data.address).then(rres=>{
            res.send(rres)
        }).catch(err=>console.log(err))
    }catch(err){
        console.log(err)
    }
})

app.get('/approve', function (req, res) {
    const req_data = req.body
    try{
        search_proven(process.env.ADDRESS, req_data.cid).then(rres=>{
            res.send(rres)
        }).catch(err=>console.log(err))
    }catch(err){
        console.log(err)
    }
})


var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("Listen in: http://%s:%s", host, port)
 
})