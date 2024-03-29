import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentScore = 0;

  get highScore(): number {
    return parseInt(localStorage.getItem('highScore'), 10) || 0;
  }

  set highScore(value: number) {
    localStorage.setItem('highScore', `${value}`);
  }

  setScore(score: number) {
    this.currentScore = score;

    if (score > this.highScore) {
      this.highScore = score;
    }
  }
}
