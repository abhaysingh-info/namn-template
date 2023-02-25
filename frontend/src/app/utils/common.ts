import {
	faBoxOpen,
	faBroom,
	faBuildingShield,
	faCouch,
	faDoorOpen,
	faEye,
	faFan,
	faFireExtinguisher,
	faGopuram,
	faGraduationCap,
	faMaskVentilator,
	faPersonDigging,
	faPlugCircleCheck,
	faRestroom,
	faShower,
	faTent,
	IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { IStringKey } from '@shared/interfaces'
import { Subscription } from 'rxjs'

// Subscription

export enum MaxScreenSize {
	sm = 640,
	md = 768,
	lg = 1024,
	xl = 1280,
	xxl = 1536,
}

export const otherRoomsIcons: IStringKey<IconDefinition> = {
	'pooja room': faGopuram,
	'study room': faGraduationCap,
	'servant room': faBroom,
	'store room': faBoxOpen,
}

export const typeOfConstructionIcons: IStringKey<IconDefinition> = {
	shed: faTent,
	rooms: faDoorOpen,
	washroom: faRestroom,
	other: faPersonDigging,
}

export const officeFacilitiesTypeIcons: IStringKey<IconDefinition> = {
	'oxygen duct': faMaskVentilator,
	UPS: faPlugCircleCheck,
	'central air conditioning': faFan,
	furnishing: faCouch,
}

export const fireSafetyMeasuresIcons: IStringKey<IconDefinition> = {
	'fire extinguisher': faFireExtinguisher,
	'fire sensors': faEye,
	sprinklers: faShower,
	'fire hose': faBuildingShield,
}

export const roles = {
	admin: 'ADMIN',
	client: 'CLIENT',
}

export class YardsSubscription {
	subscriptions: Subscription[] = []

	unsubscribeAll() {
		for (let subscription of this.subscriptions) {
			subscription.unsubscribe()
		}
	}
}
