import axios from "axios";

export async function addAsset(provider: string, capacity: number, date: number, type: string, location: string) {
    try {
        const res = await axios({
            method: 'post',
            url: "http://172.24.190.184:8080/add_asset",
            data: {
                provider: provider,
                capacity: capacity,
                date: date,
                type: type,
                location: location
            }
        })
    }
    catch (err) {
        console.log("error", err);
    }
}

export async function getAssets(address: string) {
    console.log(address);
    try {
        const res = await axios({
            method: 'post',
            url: "http://172.24.190.184:8080/asset",
            data: {
                address: address
            }
        })
        console.log(res.data);
        return res.data;
    }
    catch (err) {
        console.log("error", err);
    }
}