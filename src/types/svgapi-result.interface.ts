import { SvgApiIconInterface } from './svgapi-icon.interface';

export interface SvgApiResultInterface {
  term: string;
  total: number;
  count: number;
  page: number;
  limit: number;
  icons: SvgApiIconInterface[];
}
