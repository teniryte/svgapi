import axios from 'axios';
import { SvgApiIconInterface } from './types/svgapi-icon.interface';

import { SvgApiResponseInterface } from './types/svgapi-response.interface';
import { SvgApiResultInterface } from './types/svgapi-result.interface';

export class Client {
  domainKey: string;
  limit: number = 20;

  constructor(domainKey: string, limit = 20) {
    this.domainKey = domainKey;
    this.limit = limit;
  }

  private async request(endpoint: string): Promise<SvgApiResponseInterface> {
    const response = await axios.get(
      `https://api.svgapi.com/v1/${this.domainKey}/${endpoint}`
    );
    return response.data;
  }

  private downloadIcons(
    icons: SvgApiIconInterface[]
  ): Promise<SvgApiIconInterface[]> {
    return new Promise(resolve => {
      const promises = [];
      for (const icon of icons) {
        promises.push(
          new Promise(resolve => {
            axios.get(icon.url).then(response => {
              icon.svg = response.data;
              resolve(true);
            });
          })
        );
      }
      Promise.all(promises).then(() => {
        resolve(icons);
      });
    });
  }

  search(term: string, page: number = 1, limit: number = this.limit) {
    return new Promise(resolve => {
      let icons: SvgApiIconInterface[] = [];
      let total: number;
      let remains = limit;
      const promises = [];
      while (remains > 0) {
        const start = icons.length + (page - 1) * limit;
        const url = `list/?start=${start}&search=${term}&limit=20`;
        promises.push(
          new Promise(resolve => {
            this.request(url).then(response => {
              total = response.count;
              icons = [...icons, ...response.icons];
              resolve(true);
            });
          })
        );
        remains -= 20;
      }
      Promise.all(promises).then(() => {
        this.downloadIcons(icons).then(() => {
          const iconResults = icons.slice(0, limit);
          resolve({
            total,
            term,
            page,
            limit,
            count: iconResults.length,
            icons: iconResults,
          });
        });
      });
    });
  }
}
