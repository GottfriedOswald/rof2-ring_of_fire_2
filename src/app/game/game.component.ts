import { Component, OnInit } from '@angular/core';
import { Game } from 'src/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  game: Game;
  animateCard = false;
  currentCard: string = '';
  randomNumber = 0;
  playedCardStack = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.newGame();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name) => {
      console.log('The dialog was closed by', name);
      this.game.players.push(name);
    });
  }

  takeCard() {
    if (this.game.stack.length > 0) {
      if (!this.animateCard) {
        this.setAnimatedCardAsTrue();
        this.copyCardToCurrentCardVariable();
        this.infoConsoleLogGame();
        this.infoCardStackLength();
        this.infoNextCard();
        this.setAnimatedCardAsFalse();
        this.showCurrentPlayer();
        this.nextPlayer();
      }
    } else{
      alert("no more cards in stack!")
    }
  }

  nextPlayer() {
    if (this.game.currentPlayer < this.game.players.length - 1) {
      this.game.currentPlayer++;
    } else {
      this.game.currentPlayer = 0;
    }
  }

  showCurrentPlayer() {
    console.log(this.game.players[this.game.currentPlayer]);
  }

  infoCardStackLength() {
    console.log('im Stapel sind noch ', this.game.stack.length, ' Karten!');
  }

  infoConsoleLogGame() {
    console.log(this.game, 'this.game');
  }

  infoNextCard() {
    console.log(
      'nächste Karte ist die: ',
      this.game.stack[this.game.stack.length - 1]
    );
  }

  copyCardToPlayedCardStack() {
    this.game.playedCards.push(this.currentCard);
  }

  copyCardToCurrentCardVariable() {
    this.currentCard = this.game.stack.pop();
  }

  setAnimatedCardAsTrue() {
    this.animateCard = true;
  }

  setAnimatedCardAsFalse() {
    setTimeout(() => {
      this.copyCardToPlayedCardStack();
      this.animateCard = false;
    }, 450);
  }

  newGame() {
    this.game = new Game();

    this.infoConsoleLogGame();
    this.infoCardStackLength();
    this.infoNextCard();
    this.showCurrentPlayer();
    // this.nextPlayer();
  }
}
