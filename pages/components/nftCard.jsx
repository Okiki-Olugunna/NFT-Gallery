export const NFTCard = ({nft}) => {

    return(
        <div className="bg-slate-800 w-1/4 flex flex-col ">
            <div className="rounded-md">
                <img className="object-cover h-128 w-full rounded-lg" src={nft.media[0].gateway}/>
            </div>

            <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-lg h-110 mt-1">
                <div className="">
                    <h2 className="text-xl text-gray-800">Title: {nft.title}</h2>
                    <p className="text-gray-600">Token ID: {nft.id.tokenId.substr(nft.id.tokenId.length - 4)}</p>
                    <button className={"text-gray-600"} onClick={
                        () => {
                            let copyText = nft.contract.address;
                            navigator.clipboard.writeText(copyText);
                            alert("Copied the text: " + copyText)
                        }
                    }>
                        <p className="flex text-gray-600">Contract Address: {`${nft.contract.address.substr(0,4)}....${nft.contract.address.substr(nft.contract.address.length - 4)}`}</p>
                        <img ></img>
                    </button>
                        
                
                </div>

                <div className="flex-grow mt-2">
                    <p className="text-gray-600">Description: {`${nft.description?.substr(0, 100)}...`}</p>
                </div>

                <div className="flex justify-center mt-1 mb-1">
                    <a className="text-sm text-blue-200 mt-1 py-2 px-4 bg-blue-400 w-1/2 text-center rounded-lg cursor-pointer" target={"_blank"} href={`https://etherscan.io/token/${nft.contract.address}`}>
                        View on etherscan
                    </a>
                </div>
            </div>

        </div>
    )
}