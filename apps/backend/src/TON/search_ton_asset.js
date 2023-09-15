import axios from "axios";


export async function getitem() {
    try {
        const res = await axios({
            method: 'get',
            url: `https://testnet.tonapi.io/v2/nfts/collections/EQDW1G_c_xIb2Iyzof123IAzQlY942Pl3H6XEJ_jRB2ez-Pe/items?limit=1000&offset=0`,
        })
        console.log(res)
        return res.data["nft_items"]
    }
    catch (err) {
        console.log("error", err);
    }
}

