import { SvgApiIconInterface } from './svgapi-icon.interface';

export interface SvgApiResponseInterface {
  term: string;
  count: number;
  limit: number;
  start: number;
  responseTime: number;
  icons: SvgApiIconInterface[];
}
