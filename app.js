var List = require("collections/list");
const bigintCryptoUtils = require('bigint-crypto-utils');


let p, q, N, eulN, e = BigInt(0);
const PublicPrivatKey = [];
async function init() {
    
    this.p = BigInt( await bigintCryptoUtils.prime(2048)); 
    this.q = BigInt( await bigintCryptoUtils.prime(2048));
    console.log(`p: \n-----------------------\n${p}\nq: \n-----------------------\n${q}`);
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

    const privatKey = generetePrKey(this.e, this.eulN);
    this.PublicPrivatKey = [["PublicKey", this.e, this.N], ["PrivatKey", privatKey, p, q]];
  
    await console.log(`q:\n--------------------\n${this.q} p:\n--------------------\n${this.p}\ne:\n--------------------\n${this.e}\nN:\n--------------------\n${this.N} eulN:\n--------------------\n${this.eulN}\nprivatKey:\n--------------------\n${privatKey}\n`);
    sendMessage("test");

}

function sendMessage(m) {
    
    
    const textToArray = Object.assign([], m);
    const Buch = [];
    m = new List();
    textToArray.forEach(element => {
        console.log(element);

        Buch.push(BigInt(element.charCodeAt(0)));
        console.table(Buch);
       
    });
    Buch.forEach(element => {
        
        tmp = element ^ this.e % this.N;
        m.add(tmp);
    });
    console.table(m);
    //m = m.fromCharCode(m);
    console.log(`\n\n----------------------------------------start----------------------------------------\n${m}\n----------------------------------------End----------------------------------------`)
}
Main();





 


