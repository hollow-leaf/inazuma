import axios from "axios";

const host = "http://50.112.161.65:8080"

export async function addAsset(provider: string, capacity: number, date: number, type: string, location: string) {
    try {
        const res = await axios({
            method: 'post',
            url: host + "/add_asset",
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
            url: host + "/asset",
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

export async function getbuyList(amount: number) {
    try {
        const res = await axios({
            method: 'post',
            url: host + "/buy_power",
            data: {
                amount: amount
            }
        })
        return res.data;
    }
    catch (err) {
        console.log("error", err);
    }
}

export async function getCert(address: string) {
    try {
        const res = await axios({
            method: 'post',
            url: host + "/cert",
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