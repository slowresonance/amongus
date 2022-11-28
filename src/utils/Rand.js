import { v4 as uuidv4 } from "uuid";

export const createRandomId = () => {
  return uuidv4();
};

createRandomId();
