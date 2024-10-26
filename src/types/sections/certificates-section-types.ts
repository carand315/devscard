import { Photo, Section } from "../shared";

export interface Certificate {
  title: string;
  image?: Photo;
  company: string;
  issued: Date;
  id?: string;
}

export interface CertificatesSection extends Section {
  certificates: Certificate[];
}
