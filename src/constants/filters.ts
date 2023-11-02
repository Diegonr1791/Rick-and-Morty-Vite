export const DefaultFilters = {
  name: "",
  status: "",
  species: "",

  gender: "",
};

export const StatusFiltersNames: FiltersNamesType = [
  { name: "Alive", color: "bg-green-500" },
  { name: "Dead", color: "bg-red-500" },
  { name: "Unknown", color: "bg-gray-500" },
];
export const GenderFiltersNames: FiltersNamesType = [
  { name: "male", color: "bg-green-500" },
  { name: "female", color: "bg-red-500" },
  { name: "genderless", color: "bg-gray-500" },
  { name: "genderless", color: "bg-gray-500" },
  { name: "unknown", color: "bg-gray-500" },
];

type FiltersNamesType = {
  name: string;
  color: string;
}[];

export const SpeciesFiltersNames: SpeciesFiltersNamesType = [
  { label: "Human", value: "Human" },
  { label: "Alien", value: "Alien" },
  { label: "Humanoid", value: "Humanoid" },
  { label: "Poopybutthole", value: "Poopybutthole" },
  { label: "Mythological", value: "Mythological Creature" },
  { label: "Animal", value: "Animal" },
  { label: "Robot", value: "Robot" },
  { label: "Disease", value: "Disease" },
  { label: "Cronenberg", value: "Cronenberg" },
  { label: "Unknown", value: "unknown" },
];

type SpeciesFiltersNamesType = {
  label: string;
  value: string;
}[];
