export const rent_or_sell = ['sell', 'rent']

export enum PropertyType {
	residential = 'residential',
	commercial = 'commercial',
}

export const property_type = [PropertyType.residential, PropertyType.commercial]

export enum PropertySubTypes {
	flat = 'flat',
	villa = 'villa',
	builders_floor = 'builders floor',
	plot = 'plot',
	other = 'other',
	office = 'office',
	retail = 'retail',
	storage = 'storage',
	industry = 'industry',
	hospitality = 'hospitality',
	commercial_plot = 'commercial plot',
	commercial_other = 'commercial other',
}

export const property_sub_type_residential = [
	PropertySubTypes.flat,
	PropertySubTypes.villa,
	PropertySubTypes.builders_floor,
	PropertySubTypes.plot,
	PropertySubTypes.other,
]

export const property_sub_type_commercial = [
	PropertySubTypes.office,
	PropertySubTypes.retail,
	PropertySubTypes.storage,
	PropertySubTypes.industry,
	PropertySubTypes.hospitality,
	PropertySubTypes.commercial_plot,
	PropertySubTypes.commercial_other,
]

export const property_sub_type = [
	PropertySubTypes.flat,
	PropertySubTypes.villa,
	PropertySubTypes.builders_floor,
	PropertySubTypes.plot,
	PropertySubTypes.other,
	PropertySubTypes.office,
	PropertySubTypes.retail,
	PropertySubTypes.storage,
	PropertySubTypes.industry,
	PropertySubTypes.hospitality,
	PropertySubTypes.commercial_plot,
	PropertySubTypes.commercial_other,
]

export const other_rooms = [
	'pooja room',
	'study room',
	'servant room',
	'store room',
]

export const furnishing = ['furnished', 'semi-furnished', 'un-furnished']

export const availability_status = ['ready to move', 'under construction']

export const age_of_property = [
	'0 to 1 years',
	'1 to 5 years',
	'5 to 10 years',
	'10+ years',
]

export const ownership_status = [
	'freehold',
	'leasehold',
	'co-operative society',
	'power of attorney',
]

export const type_of_construction = ['shed', 'rooms', 'washroom', 'other']

export const authority_to_approve_property = ['rcuda', 'pcntda', 'pmrda']
export const office_types = [
	'ready to move office space',
	'bare shell office space',
	'co-working office space',
]
export const retail_types = ['commercial shop', 'commercial showroom']
export const storage_types = ['ware house', 'cold storage']
export const industry_types = ['farefactory', 'manufacturing']
export const hospatility_types = [
	'hotel / resort',
	'banquet - hall / guest - house',
]
export const plot_types = [
	'commercial land',
	'industrial land',
	'agricultural land',
]

export const located_inside = ['it park', 'business park', 'other']
export const zone_type = [
	'industrial',
	'commercial',
	'residential',
	'transport and communication',
	'public utilities',
	'public and semi-public use',
	'open space',
	'agricultural zone',
	'specual economic zone',
	'natural conservation zone',
	'government use',
	'other',
]

export const office_pantry_type = ['private', 'shared', 'not - availabel']
export const office_facilities_type = [
	'oxygen duct',
	'UPS',
	'central air conditioning',
	'furnishing',
]
export const office_previous_used_for = [
	'backend office',
	'CA office',
	'frontend office',
	'small office purpose',
	'traders office',
	'advocate office',
]

export const fire_safety_measures = [
	'fire extinguisher',
	'fire sensors',
	'sprinklers',
	'fire hose',
]

export const retail_shop_location = [
	'mall',
	'commercial project',
	'residential project',
	'retail complex',
	'market',
	'other',
]

export const retail_located_near = ['entrance', 'elevator', 'stairs']

export const washroom_type = [
	'private washroom',
	'public washroom',
	'unavailable',
]
export const parking_type = [
	'public parking',
	'private parking',
	'multilevel parking',
	'not available',
]

export const retail_business_suitablitiy = [
	'atm',
	'bakery',
	'boutique',
	'clinic',
	'clothes',
	'cloud kitchen',
	'cafe',
	'dental clinic',
	'fastfood',
	'footwear',
	'grocery',
	'gym',
	'juice',
	'meat',
	'medical',
	'mobile',
	'pub/bar',
	'restaurant',
	'saloon',
	'spa',
	'stationary',
	'sweet',
	'tea stall',
	'other',
]

export const quality_rating = [
	'No rating',
	'1 star',
	'2 star',
	'3 star',
	'4 star',
	'5 star',
	'6 star',
	'7 star',
]

export const property_facing = [
	'east',
	'west',
	'north',
	'south',
	'north-east',
	'north-west',
	'south-east',
	'south-west',
]

export const plot_approved_for_industry_type = [
	'automobile',
	'biotechnology',
	'capital goods',
	'chemicals',
	'construction',
	'defence and aerospace manufacturing',
	'electronics hardware',
	'engineering',
	'food processing',
	'gems and jewellery',
	'handicrafts',
	'it and ites',
	'leather',
	'manufacturing',
	'medical devices',
	'metals',
	'mixed',
	'petroleum',
	'pharmaceuticals',
	'renewable energy',
	'software',
	'textiles',
]

export const pay_duration = [
	'weekely',
	'monthly',
	'quaterly',
	'half-yearly',
	'yearly',
]

export enum PayDuration {
	weekely = 'weekely',
	monthly = 'monthly',
	quaterly = 'quaterly',
	half_yearly = 'half-yearly',
	yearly = 'yearly',
}
