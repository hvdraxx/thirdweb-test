import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";

const PRIVATE_KEY = "PRIVATE_KEY";
const rpcUrl = "https://matic-mumbai.chainstacklabs.com";
const marketplaceAddress = "0xF654548909c18B7d13c1b5B2B6A1f8e0E54c3E80";

const contractAddress = "0x2953399124f0cbb46d2cbacd8a89cf0599974963";
const tokenId = "23861257157391198544587313545499054386735490143430177985670369550198456188929";

const provider = ethers.getDefaultProvider(rpcUrl);
const sdk = new ThirdwebSDK(new ethers.Wallet(PRIVATE_KEY, provider ));
const marketplace = sdk.getMarketplace(marketplaceAddress);

const listing = {
  assetContractAddress: contractAddress,
  tokenId: tokenId,
  startTimestamp: new Date(),
  listingDurationInSeconds: 86400,
  quantity: 1,
  currencyContractAddress: "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa",
  buyoutPricePerToken: "1",
}

// console.log(await marketplace.direct.createListing(listing));
console.log(await marketplace.getAllListings());