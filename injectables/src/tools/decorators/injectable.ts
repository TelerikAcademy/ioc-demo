import { Class } from '../../types/class-type';

export const Injectable = () => {
  
  return (target: Class<any>) => {

    // for debugging purposes
    // console.log(`Class is now injectable: ${target.name}`);

  };
}
