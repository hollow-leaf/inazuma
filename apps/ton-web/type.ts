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
    id:string
    tokenID: string,
    units: string,
}

export type providerTableItemType = {
    result: BigInt,
    status: string
    provider: string
    name: string
}
