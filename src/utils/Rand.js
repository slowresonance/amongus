import { v4 as uuidv4 } from "uuid";

export const createRandomId = () => {
  console.log(uuidv4());
  return uuidv4();
};

createRandomId();
