import { Release } from "./Release";
import { AllRelease } from './AllRelaese';
export const Main = () => {
  return (
    <main className="bg-white px-[35px] pt-[20px] pb-[100px] xl:flex">
      <Release></Release>
      <AllRelease></AllRelease>
    </main>
  );
};
