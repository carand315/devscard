import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/profile.png'),
  fullName: 'Carlos Bermudez',
  role: 'Senior Full Stack Web Developer | Angular & .NET',
  details: [
    { label: 'Email', value: 'cbermudeztorres@outlook.com', url: 'mailto:cbermudeztorres@outlook.com' },
    { label: 'From', value: 'Colombia' }
  ],
  pdfDetails: [
    { label: 'Email', value: 'cbermudeztorres@outlook.com' },
    { label: 'LinkedIn', value: '/in/cbermudez', url: 'https://linkedin.com' },
  ],
  description:
    'Full Stack Developer with +10 years of experience in software products development with the measure focused on Microsoft .NET technologies and Angular Framework, achieving the MCP (Microsoft Certified Professional). Team worker with experience using the development framework SCRUM.',
  tags: [{ name: 'Angular' }, { name: 'Microsoft' }, { name: 'Azure' }, { name: 'Database' }, { name: 'API' }, { name: 'Scrum' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Mark_Freeman.pdf',
  },
  links: [linkedin({ url: 'https://www.linkedin.com/in/cbermudezt' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
