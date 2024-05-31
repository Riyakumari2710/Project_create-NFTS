// create a variable to hold your NFT's
const nfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(cakeName, pound, price) {
    const nft = {
        cakeName: cakeName,
        pound: pound,
        price : price,
    };
    nfts.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    nfts.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`  cakeName: ${nft.cakeName}`);
        console.log(`  pound: ${nft.pound}`);
        console.log(`  price: ${nft.price}`);
    });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// call your functions below this line
mintNFT("dark forest", "1", 600);
mintNFT("red velvett", "2", 1250);
mintNFT("Cheese cake", "4", 2000);

listNFTs();
getTotalSupply();
