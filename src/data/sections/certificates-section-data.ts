import type { CertificatesSection } from '@/types/sections/certificates-section-types';
import type { ReadonlyDeep } from 'type-fest';


const certificatesSectionData = {
  config: {
    title: 'Certificates',
    slug: 'certificates',
    icon: 'fa6-solid:certificate',
    visible: true,
  },
  certificates: [
    // {
    //   title: 'Microsoft Certified Professional',
    //   company: 'Microsoft',
    //   image: import('@/assets/logos/microsoft.png'),
    //   issued: new Date('2014-12')
    // },
    {
      title: 'Mid-Level Angular Developer',
      company: 'certificates.dev',
      image: import('@/assets/logos/angular-badge.png'),
      issued: new Date('2024.10'),
      id: 'Credential ID 9d588428-a13d-48c3-8d80-b5a919a52589'
    },
    {
      title: 'Azure Fundamentals',
      company: 'Microsoft',
      image: import('@/assets/logos/microsoft.png'),
      issued: new Date('2024.10'),
      id: 'Credential ID C3199C9B7576A064'
    },
    {
      title: 'Programming in HTML5, CSS3 & Javascript',
      company: 'Microsoft',
      image: import('@/assets/logos/microsoft.png'),
      issued: new Date('2014.12'),
      id: 'Credential ID F126-7346'
    },
    {
      title: 'SCRUM Developer',
      company: 'Scrum Agile Institute',
      image: import('@/assets/logos/scrum.png'),
      issued: new Date('2017.01'),
      id: 'Credential ID 311202-07'
    },
    {
      title: 'B1 Intermediate',
      company: 'American & British Academy',
      image: import('@/assets/logos/aba.png'),
      issued: new Date('2019.06')
    }

  ],
} as const satisfies ReadonlyDeep<CertificatesSection>;

export default certificatesSectionData;
