import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';
import {
  angular,
  azure,
  csharp,
  docker,
  git,
  sql,
  vue,
  webApi
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: '.NET & Angular Developer Full Stack Developer',
      company: 'FPT Software',
      image: import('@/assets/logos/fpt.png'),
      dates: [new Date('2021-10'), new Date('2024-02')],
      description: `
        - Migrating Angular version from v8 to 11v for web software insurance application.
        - Developing new features using .NET for the backend side and Angular for SPA.
        - Resolving bugs on different parts of the application including Store Procedures.
        - Attending Scrum meetings.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [csharp(), angular(), webApi(), sql(), azure(), docker()],
      },
      links: [website({ url: 'https://fptsoftware.com' })],
    },
    {
      role: '.NET Full Stack Developer',
      company: 'Gorilla Logic',
      image: import('@/assets/logos/gorilla.png'),
      dates: [new Date('2020-09'), new Date('2021-09')],
      description: `
        - Software Developer in Young Living project. Using NET Core and Angular Building WebAPI using a microservices architecture.
        - Resolving bugs and maintenance of a virtual shopping application.
        - Developing new features using AngularJS
        - Attending Scrum meetings
      `,
      tagsList: {
        title: 'Technologies',
        tags: [csharp(), angular(), webApi(), sql(), git()]
      },
      links: [website({ url: 'https://gorillalogic.com' })],
    },
    {
      role: 'Semi-Senior Software .NET Developer',
      company: 'Globant',
      image: import('@/assets/logos/globant.png'),
      dates: [new Date('2019-08'), new Date('2020-08')],
      description: `
        - Software Developer in Investment project. Using NET Core and Vue.js with CSS. WebAPI’s + EF and XUnit.
        - Coordinating the work of the team (3 developers and 1 QA).
        - Reviewing and approving Pull Requests
      `,
      tagsList: {
        title: 'Technologies',
        tags: [csharp(), vue(), webApi(), sql()]
      },
      links: [website({ url: 'https://www.globant.com/' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
