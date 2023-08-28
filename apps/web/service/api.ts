import axios from "axios";

export async function addAsset(provider: string, capacity: number, date: number, type: string, location: string) {
    try {
        const res = await axios({
            method: 'post',
            url: "http://50.112.161.65:8080/add_asset",
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
    try {
        const res = await axios({
            method: 'post',
            url: "http://50.112.161.65:8080/asset",
            data: {
                address: address
            }
        })
        return res.data;
    }
    catch (err) {
        console.log("error", err);
    }
}