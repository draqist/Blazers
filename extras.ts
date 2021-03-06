const projectdescription =
  "Blaze is a project management system,  built with Nextjs in Typescript, Firebase (Planetscale) for database management and Recoil and recoil for state management. It's a desktop-oriented web application with duo-theming that allows users organize their tasks, priorities and schedules.";

const letter = {
  hidden: { opacity: 0, y: 50, color: '#718' },
  visible: {
    opacity: 1,
    y: 0,
    color: '#e1e1e1',
  },
};
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export { projectdescription, sentence, letter };
