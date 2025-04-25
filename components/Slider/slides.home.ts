export const slides = [
  {
    imageSrc: "/country-img-1.svg",
    description: "Work and Travel Germany",
    number: 1,
  },
  {
    imageSrc: "/country-img-2.svg",
    description:
      "Повышение квалификации в Германии, выпускникам вузов (трудоустройтво после окончания вузов)",
    number: 2,
  },
  {
    imageSrc: "/country-img-3.svg",
    description: "Трудоустройтво в Польше ",
    number: 3,
  },
  {
    imageSrc: "/country-img-4.svg",
    description: "Трудоустройство в Германии",
    number: 4,
  },
  {
    imageSrc: "/country-img-1.svg",
    description: "Work and Travel Germany",
    number: 5,
  },
  {
    imageSrc: "/country-img-4.svg",
    description: "Трудоустройство в Германии",
    number: 6,
  },
];

export const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
});

export const breakpoints = ref({
  768: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  1140: {
    itemsToShow: 3,
    snapAlign: "center",
  },
  1251: {
    itemsToShow: 4,
    snapAlign: "start",
  },
});
