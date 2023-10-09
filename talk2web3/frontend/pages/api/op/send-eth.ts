import { ethers, utils } from 'ethers';
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
  }

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {

    var token = req.headers.authorization;
    var sender = req.body.sender;
    var receiver = req.body.receiver;
    var amount = req.body.value;

    const provider = new ethers.providers.InfuraProvider(10, process.env.INFURA_PROJECT_ID);

    try {

        const params = [{
            from: sender,
            to: receiver,
            value: ethers.utils.parseUnits(amount, 'ether').toHexString()
        }];

        const transactionHash = await provider.send('eth_sendTransaction', params);

        console.log('transactionHash is ' + transactionHash);

        return res.status(200).json({ message: `Sent ETH to ${receiver}` })


    }

    catch (error) {
        console.log(error);
    };

}