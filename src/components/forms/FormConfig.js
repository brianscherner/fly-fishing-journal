export const formCharacterLimits = {
  destination: 56,
  county: 56,
  state: 56,
  country: 56,
  species: 100,
  climate: 56,
  fliesUsed: 100,
  fishCaught: 100,
  fishingTackleUsed: 100,
  fishingMethod: 100,
  riverFlowLevels: 56,
  travelDocs: 100,
  travelCosts: 100,
  tripExpenses: 100,
  depositTerms: 100,
  tripInsurance: 100,
  evacInsurance: 100,
  cancellationPolicy: 100,
  baggageLuggage: 100,
  licenses: 100,
  access: 100,
  timeOfDay: 56,
  travelTime: 100,
  communications: 100,
  gratuity: 100,
  clothingRequirements: 100,
  gearRequirements: 100,
  flyRequirements: 100
};

export const destInfoFields = [
  {
    field: "destination",
    emptyMessage: "A fishing location is required.",
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.destination,
    required: true
  },
  {
    field: "season",
    emptyMessage: "A season is required.",
    required: true
  },
  {
    field: "startDate",
    emptyMessage: "A start date is required.",
    required: true
  },
  {
    field: "startDate",
    emptyMessage: "A start date is required.",
    required: true
  },
  {
    field: "waterBodyType",
    emptyMessage: "A water body type is required.",
    required: true
  },
  {
    field: "species",
    emptyMessage: "A fish species is required.",
    limitMessage: "Max character length exceeded.",
    limit: formCharacterLimits.species,
    required: true
  },
  {
    field: 'county',
    emptyMessage: "A county is required.",
    limitMessage: "Max character length exceeded.",
    limit: formCharacterLimits.county,
    required: true
  },
  {
    field: "state",
    emptyMessage: "A state is required.",
    limitMessage: "Max character length exceeded.",
    limit: formCharacterLimits.state,
    required: true
  },
  {
    field: 'country',
    emptyMessage: 'A country is required.',
    limitMessage: "Max character length exceeded.",
    limit: formCharacterLimits.country,
    required: true
  },
  {
    field: 'climate',
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.climate,
    required: false
  }
];

export const tripNotesFields = [
  {
    field: 'fliesUsed',
    emptyMessage: 'Please enter flies used.',
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.fliesUsed,
    required: true
  },
  {
    field: "fishCaught",
    emptyMessage: 'Please enter fish caught.',
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.fishCaught,
    required: true
  },
  {
    field: "fishingTackleUsed",
    emptyMessage: "Please enter fishing tackle.",
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.fishingTackleUsed,
    required: true
  },
  {
    field: "fishingMethod",
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.fishingMethod,
    required: false
  },
  {
    field: "riverFlowLevels",
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.riverFlowLevels,
    required: false
  }
];

export const tripCostsFields = [
  {
    field: 'travelDocs',
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.travelDocs,
    required: false
  },
  {
    field: 'travelCosts',
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.travelCosts,
    required: false
  },
  {
    field: 'tripExpenses',
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.tripExpenses,
    required: false
  },
  {
    field: 'depositTerms',
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.depositTerms,
    required: false
  },
  {
    field: 'tripInsurance',
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.tripInsurance,
    required: false
  },
  {
    field: 'evacInsurance',
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.evacInsurance,
    required: false
  },
  {
    field: 'cancellationPolicy',
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.cancellationPolicy,
    required: false
  },
  {
    field: 'baggageLuggage',
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.baggageLuggage,
    required: false
  },
];

export const miscellaneousFields = [
  {
    field: 'fliesUsed',
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.fliesUsed,
    required: false
  },
  {
    field: 'licenses',
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.licenses,
    required: false
  },
  {
    field: 'access',
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.access,
    required: false
  },
  {
    field: 'timeOfDay',
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.timeOfDay,
    required: false
  },
  {
    field: 'travelTime',
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.travelTime,
    required: false
  },
  {
    field: 'gratuity',
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.gratuity,
    required: false
  },
  {
    field: 'communications',
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.communications,
    required: false
  },
];

export const gearRequirementsFields = [
  {
    field: 'clothingRequirements',
    emptyMessage: "Please enter clothing requirements.",
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.clothingRequirements,
    required: true
  },
  {
    field: 'gearRequirements',
    emptyMessage: "Please enter fishing gear requirements.",
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.gearRequirements,
    required: true
  },
  {
    field: 'flyRequirements',
    emptyMessage: "Please enter fly requirements.",
    limitMessage: "Max character limit exceeded.",
    limit: formCharacterLimits.flyRequirements,
    required: true
  },
]