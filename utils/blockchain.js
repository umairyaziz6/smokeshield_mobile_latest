import { ethers } from "ethers"

const wallet = new ethers.Wallet(process.env.EXPO_PUBLIC_PRIVATE_KEY)

export default wallet;