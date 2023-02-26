export class Game {
  public players: string[] = [];
  public stack: string[] = [];
  public playedCards: string[] = [];
  public currentPlayer: number = 0;


  constructor(){
    this.pushTheCards();
    this.shuffleArray(this.stack);
  }

  pushTheCards(){
    for (let i = 1; i <= 13; i++) {
        this.stack.push('spade_'+i);
        this.stack.push('diamonds_'+i);
        this.stack.push('hearts_'+i);
        this.stack.push('clubs_'+i);
    }
  }

  /**
   * Shuffles array in place. ES6 version
   * @param {Array} a items An array containing the items.
   */
  shuffleArray(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
