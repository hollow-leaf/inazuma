import axios from "axios";


export async function getitem() {
    try {
        const res = await axios({
            method: 'get',
            url: `https://testnet.tonapi.io/v2/nfts/collections/EQDW1G_c_xIb2Iyzof123IAzQlY942Pl3H6XEJ_jRB2ez-Pe/items?limit=1000&offset=0`,
        })
        console.log(res)
        return res
    }
    catch (err) {
        console.log("error", err);
    }
}

export async function getsale(market){
    let items = await getitem()
    items = items.data["nft_items"]

    let sales = []

    items.forEach(item => {
        if(item["sale"]!=undefined){
            if(item["sale"]["market"]['address']==market){
                sales.push(item)
            }
        }
    });
    console.log(sales)
    return sales
}