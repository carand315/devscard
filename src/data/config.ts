import type { Config } from '@/types/data';
import { enUS } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: enUS,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Carlos Bermudez - Senior Full Stack Web Developer | Angular & .NET',
    description:
      'Full Stack Developer with +10 years of experience in software products development with the measure focused on Microsoft .NET technologies and Angular Framework, achieving the MCP (Microsoft Certified Professional)',
    faviconPath: '/src/assets/profile.png',
  },
  pdf: {
    footer:
      'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
