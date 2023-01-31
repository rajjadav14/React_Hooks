import { createContext, FC } from "react";
import Level1 from "./level1";

export interface IUserContext {
  name: string;
  email: string;
  age: number;
}

export const UserContext = createContext<IUserContext | null>({
  name: "vishal",
  email: "vish@gmail.com",
  age: 22,
});
const sampleData: IUserContext = {
  name: "mihir",
  email: "mihir@gmail.com",
  age: 23,
};
const Index: FC = () => {
  return (
    <>
      <UserContext.Provider value={sampleData}>
        <Level1 />
      </UserContext.Provider>
      {/* for using default value of context uncomment bellow line */}
      {/* <Level1 /> */}
    </>
  );
};

export default Index;
