import {randomSort} from './utils';

const parts = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Nam lobortis nec est vel accumsan.`,
  `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam a pulvinar augue.`,
  `Integer porttitor porttitor quam, id dignissim ipsum elementum in.`,
  `Nullam congue a orci ut mollis.`,
  `In convallis tempus velit, ut tristique neque suscipit ut.`,
  `Aenean consectetur dui felis, ut bibendum turpis commodo a.`,
  `Sed aliquam massa sed malesuada gravida.`,
  `Aliquam tristique lectus nec mollis malesuada.`,
  `Integer sit amet ullamcorper velit, in vehicula odio.`,
  `Curabitur sed hendrerit est.`,
  `Proin placerat imperdiet eleifend.`,
  `Aliquam erat volutpat.`,
  `Morbi vitae ligula a ligula ultrices interdum.`,
  `Ut porttitor erat eu ornare efficitur.`,
  `Sed fringilla ipsum vel velit sagittis fermentum.`,
  `Vivamus dolor risus, congue a orci in, mattis sollicitudin magna.`
];

const getText = (textSize = 0) => {
  if (textSize === 0) {
    textSize = parts.length - 1;
  }
  return randomSort(parts).slice(0, textSize).join(` `);
};

export default getText;
