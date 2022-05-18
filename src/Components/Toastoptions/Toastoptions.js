import { Icon } from "@iconify/react";

const toastOptions = {
  // Define default options
  duration: 3000,
  // Default options for specific types
  success: {
    className: "bg-green-500 text-white",
  },
};
export default toastOptions;

// custom toast style
export const favorite = {
  icon: <Icon icon="ic:outline-favorite" />,
  className: "bg-orange-500  text-white",
};
