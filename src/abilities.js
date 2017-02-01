
const general_abilities = [
"Athletics",
"Conceal",
"Cover",
"Digital Intrusion",
"Disguise",
"Driving",
"Explosive Devices",
"Filch",
"Gambling",
"Hand-to-Hand",
"Health",
"Infiltration",
"Mechanics",
"Medic",
"Network",
"Piloting",
"Preparedness",
"Sense Trouble",
"Shooting",
"Shrink",
"Stability",
"Surveillance",
"Weapons",
];

const academic_abilities = [
"Accounting",
"Archaeology",
"Architecture",
"Art History",
"Criminology",
"Diagnosis",
"History",
"Human Terrain",
"Languages",
"Law",
"Military Science",
"Occult Studies",
"Research",
"Vampirology"
];

const interpersonal_abilities = [
"Bullshit Detector",
"Bureaucracy",
"Cop Talk",
"Flattery",
"Flirting",
"High Society",
"Interrogation",
"Intimidation",
"Negotiation",
"Reassurance",
"Streetwise",
"Tradecraft",
];

const technical_abilities = [
"Astronomy",
"Chemistry",
"Cryptography",
"Data Recovery",
"Electronic Surveillance",
"Forensic Pathology",
"Forgery",
"Notice",
"Outdoor Survival",
"Pharmacy",
"Photography",
"Traffic Analysis",
"Urban Survival",
];

let investigative_abilities = [ ...academic_abilities, ...interpersonal_abilities, ...technical_abilities ];

export default {
    academic_abilities,
    interpersonal_abilities,
    technical_abilities,
    investigative_abilities,
    general_abilities
};
