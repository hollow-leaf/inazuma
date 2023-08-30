export type SellerTableItemType = {
    powerType: string,
    kWh: number,
    date: string,
    status: boolean,
    provider: string,
    location: string,
    Co2CID: string,
    hyperCID: string,
    sequence: number,
    tokenId: string,
}

export type buyerTableItemType = {
    powerType: string,
    kWh: number,
    date: string,
    provider: string,
}

export type providerTableItemType = {
    result: BigInt,
    status: string
    provider: string
    name: string
}
