// txIn 객체를 생성해줄 클래스

export class TxIn implements ITxIn{
    public txOutId : string;
    public txOutIndex : number; // 배열의 인덱스 값 (첫 트랜잭션의 경우 블록의 높이)
    public singature?: string; // 첫 트랜잭션은(코인베이스 트랜잭션) 서명이 없으니 undefined도 같이 설정 
    constructor(txOutId : string , txOutIndex : number, singature : string | undefined){
        this.txOutId = txOutId;
        this.txOutIndex = txOutIndex;
        this.singature = singature;
    }

    // Txins 생성 함수
    static createTxIns(receivedTx : any, myUTXO : IUnspentTxOut[])
    {
        let sum = 0;
        // 
        let txins : TxIn[] = []
        for (let i = 0; i < myUTXO.length; i++) {
            const {txOutId, txOutindex, amount} = myUTXO[i];
            const item : TxIn = new TxIn(txOutId, txOutindex, receivedTx.signature);
            txins.push(item);
            sum += amount;
            if( sum >= receivedTx.amount ) return { sum, txins }
        }

        return {sum,txins}
    }
}