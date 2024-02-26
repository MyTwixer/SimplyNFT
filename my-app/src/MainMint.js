import {useState} from 'react';
import {ethers, BigNumber} from 'ethers';
import SimpleNFT from './SimplyNFT.json';
import { hardhatArguments } from 'hardhat';
import { HardhatPluginError } from 'hardhat/plugins';
import { DEBUG_FILE_FORMAT_VERSION } from 'hardhat/internal/constants';

const SimpleTokenAddress = "0x8Bd2082f0339b19F059BDF85B0906b2DA2F1C439";

const MainMint = ({accounts, setAccounts}) => {
    const [mintAmount, setMintAccount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const singer = provider.getSigner();
            const contract = new ethers.Contract(
                SimpleTokenAddress,
                SimpleNFT.abi,
                singer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount));
                console.log(`Response: ${response}`)
            } catch(err) {
                console.log(`Error: ${err}`)
            }
        }
        const handleDecrement = () => {
            if (mintAmount <= 1) return;
            setMintAccount(mintAmount - 1);          
        }
        const handleIncrement = () => {
            if (mintAmount >= 3) return;
            setMintAccount(mintAmount + 1);          
        }
    }
    return (
        <div>
            <h1>SimplyToken</h1>
            <p>It`s just a sipmly nft for me, not for you. Get out from here bitch...</p>
            {isConnected ? (
                <div>
                    <div>
                        <button onClick={handleDecrement}>-</button>
                        <input type='number' value={mintAmount}></input>
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <button onClick={handleMint}>Mint</button>
                </div>
            ) : (
                <p>You must be connected to Mint.</p>
            )}
        </div>
    )
}

export default MainMint;
