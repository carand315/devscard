import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'System Engineering',
      institution: 'Universidad de Cartagena',
      image: import('@/assets/logos/udc.png'),
      date: new Date('2014.06'),
      description: '',
      links: [website({ url: 'https://www.unicartagena.edu.co/' })],
    },
    {
      title: 'Specialization in Software Engineering',
      institution: 'Fundación Universitaria Tecnológico Comfenalco',
      image: import('@/assets/logos/tc.png'),
      date: new Date('2018.06'),
      description: "",
      links: [website({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
