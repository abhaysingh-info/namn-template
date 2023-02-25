import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@Component({
	selector: 'app-hero',
	standalone: true,
	imports: [CommonModule, FontAwesomeModule],
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
	ipsum: string[] = ['I', 'P', 'S', 'U', 'M', ' ', '2', 'K', '2', '3']

	alphanum: string = 'abcdefghijklmnopqrstuvwxyz1234567890'
	private alphanumLength = this.alphanum.length

	changeTextMouseOverInterval: any

	startChangingLettersOfTitle() {
		this.changeTextMouseOverInterval = setInterval(() => {
			for (let index = 0; index < this.ipsum.length; index++) {
				if (this.ipsum[index] === ' ') continue
				this.ipsum[index] =
					this.alphanum[Math.floor(Math.random() * this.alphanumLength)]
			}
		}, 75)
	}

	clearChangeTextMouseOverInterval() {
		clearInterval(this.changeTextMouseOverInterval)
		this.ipsum = ['I', 'P', 'S', 'U', 'M', ' ', '2', 'K', '2', '3']
	}
}
