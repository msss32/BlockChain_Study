import { Block } from "@core/blockChain/block";

export class Chain {
  private blockchain: Block[];
  constructor() {
    this.blockchain = [Block.getGENESIS()];
  }
  public getChain(): Block[] {
    return this.blockchain;
  }
  public getLength(): number {
    return this.blockchain.length;
  }
  public getLatestBlock(): Block {
    return this.blockchain[this.blockchain.length - 1];
  }
  public addBlock(data: string[]): Failable<Block, string> {
    const previousBlock = this.getLatestBlock();
    const newBlock = Block.generateBlock(previousBlock, data);
    const isVaild = Block.isValidNewBlock(newBlock, previousBlock);

    if (isVaild.isError) return { isError: true, value: "ERROR" };

    this.blockchain.push(newBlock);

    return { isError: false, value: newBlock };
  }
}
