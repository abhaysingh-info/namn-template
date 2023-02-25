import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { IconCardComponent } from 'src/app/shared/icon-card/icon-card.component'
import { aboutSeminarSection } from 'src/app/utils/text.config'

@Component({
	selector: 'app-about-seminar-section',
	standalone: true,
	imports: [CommonModule, FontAwesomeModule, IconCardComponent],
	templateUrl: './about-seminar-section.component.html',
	styleUrls: ['./about-seminar-section.component.scss'],
})
export class AboutSeminarSectionComponent {
	data = aboutSeminarSection
}
