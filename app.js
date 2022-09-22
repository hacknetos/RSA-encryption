const randomPrime = require('./randome-Prime');
const bigintCryptoUtils = require('bigint-crypto-utils');


let p, q, N, eulN, e = BigInt(0);

async function init() {
    
    this.p = BigInt( await bigintCryptoUtils.prime(2048)); //TODO Rendom Prime Zahl 128bit
    this.q = BigInt( await bigintCryptoUtils.prime(2048));//TODO Rendom Prime Zahl 128bit
    console.table([[this.p, this.q]]);
    this.N= BigInt(this.p * this.q);
    this.eulN = BigInt((this.p - BigInt(1)) * (this.q - BigInt(1)));
    this.e = BigInt(await bigintCryptoUtils.prime(128));
    
    
}


function gendfinish(x,y,durchleufe) {
    console.table(durchleufe);

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
function publicKeyGen(e,N) {
    
}

async function Main() {
    await init();

    const privatKey = BigInt(generetePrKey(this.e, this.eulN));
    const publicKey = BigInt( publicKeyGen( this.e,this.N));
    const PublicPrivatKey = [[publicKey,this.e,this.N],[privatKey,d,p,q]]
  
    const Message = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur ";

    await console.log(`q: ${this.q} p: ${this.p}\ne: ${this.e}\nN: ${this.N} eulN: ${this.eulN}\nprivatKey: ${privatKey}\n`);

}
Main();


 


