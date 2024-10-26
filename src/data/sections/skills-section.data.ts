import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  agile,
  angular,
  azure,
  cdCi,
  chartJs,
  csharp,
  docker,
  dotnet,
  git,
  googleMaps,
  pms,
  sass,
  sql,
  typescript,
  unitTesting,
  webApi
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'gravity-ui:curly-brackets',
    visible: true,
  },
  skillSets: [
    {
      title: '',
      skills: [
        dotnet({
          level: 5,
          description: 'Including NET Core'
        }),
        // react({
        //   level: 5,
        //   description:
        //     'Proin ut erat sed massa tempus suscipit. Mauris efficitur nunc sem, nec scelerisque ligula bibendum ut.',
        // }),
        angular({
          level: 5
        }),
        typescript({
          level: 3
        }),
        sass({
          level: 3
        }),
        googleMaps({
          level: 3
        }),
        chartJs({
          level: 3
        }),
        webApi({
          level: 5
        }),
        azure({
          level: 3,
          description: 'Including Azure DevOps'
        }),
        sql({
          level: 4
        }),
        csharp({
          level: 5
        }),
        docker({
          level: 2
        }),
        unitTesting({
          level: 4
        }),
        cdCi({
          level: 3
        }),
        git({
          level: 5,
          description: 'GitHub, GitLab, Bitbucket, Azure DevOps, etc.'
        }),
        agile({
          level: 5
        }),
        pms({
          level: 4,
          description: 'Project Management Software'
        }),
        // chakraUi({ level: 5 }),
        // tailwindCss({ level: 3 }),
        // prettier({ level: 5 }),
        // eslint({
        //   level: 4,
        //   description:
        //     'Nulla tempor turpis at vehicula pharetra. Vestibulum tellus tortor, commodo et suscipit id, lobortis id nunc.',
        // }),
        // nestJs({
        //   level: 3,
        //   description:
        //     'Praesent feugiat ultricies iaculis. In posuere vehicula odio, sed consequat velit porta viverra.',
        // }),
        // postgreSql({ level: 2 }),
        // mongoDb({ level: 1 }),
        // firebase({ level: 1 }),
        // pnpm({ level: 3 }),
      ],
    },
    // {
    //   title: 'I want to learn',
    //   skills: [apolloGraphql(), astro(), supabase(), cypress()],
    // },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:co', name: 'Spanish - Native' },
        { icon: 'circle-flags:us', name: 'English - B1' },
        { icon: 'game-icons:spiked-dragon-head', iconColor: 'brown', name: 'High Valyrian - A1' }
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
