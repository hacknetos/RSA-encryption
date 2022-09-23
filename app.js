const randomPrime = require('./randome-Prime');
const bigintCryptoUtils = require('bigint-crypto-utils');


let p, q, N, eulN, e = BigInt(0);
const PublicPrivatKey = [];
async function init() {
    
    this.p = BigInt( await bigintCryptoUtils.prime(2048)); //TODO Rendom Prime Zahl 128bit
    this.q = BigInt( await bigintCryptoUtils.prime(2048));//TODO Rendom Prime Zahl 128bit
    console.table([[this.p, this.q]]);
    this.N= BigInt(this.p * this.q);
    this.eulN = BigInt((this.p - BigInt(1)) * (this.q - BigInt(1)));
    this.e = BigInt(await bigintCryptoUtils.prime(128));
    
    
}






function generetePrKey(e,eulN) {
    
   
        let privatKey = BigInt(0);
        let y = BigInt(1);
        let u = BigInt(1);
        let v = BigInt(0);
        while(e !=0 ) {
            let q = BigInt(eulN / e);
            let r = BigInt(eulN % e);
            let m = BigInt(u * q);
            m = BigInt( privatKey - m);
            let n = BigInt( v * q);
            n        =BigInt( y - n);
            eulN      = BigInt(e);
            e = BigInt(r);
            privatKey = BigInt(u);
            y        = BigInt(v);
            u        = BigInt(m);
            v        = BigInt(n);
    }
        return BigInt(privatKey);
    
    
}


async function Main() {
    await init();

    const privatKey = BigInt(generetePrKey(this.e, this.eulN));
    sPublicPrivatKey = [["PublicKey", this.e, this.N], ["PrivatKey", privatKey, p, q]];
  
    await console.log(`q: ${this.q} p: ${this.p}\ne: ${this.e}\nN: ${this.N} eulN: ${this.eulN}\nprivatKey: ${privatKey}\n`);
    sendMessage("test");

}

function sendMessage(m) {
    
    
    const usingObjectAssign = Object.assign([], m);
    const Buch = [];
    m = "";
    usingObjectAssign.forEach(element => {
        console.log(element);

        Buch.push(BigInt(element.charCodeAt(0)));
        console.table(Buch);
       
    });
    Buch.forEach(element => {
        
        element = element ^ this.e % this.N;
        m += String.fromCharCode(element);
    });
    console.log(m);
    //m = m.fromCharCode(m);
    console.log(`\n\n----------------------------------------start----------------------------------------\n${m}\n----------------------------------------End----------------------------------------`)
}
Main();





 


