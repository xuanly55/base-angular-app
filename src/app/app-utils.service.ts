import { Injectable } from '@angular/core';
import { PapaParseService } from 'ngx-papaparse';

@Injectable()
export class AppUtilsService {

  constructor(private csvService: PapaParseService) { }

  getParsedCsvData(rawData, headers) {
    const jsonData = [];

    this.csvService.parse(rawData, {
      complete: (results, file) => {
        results.data.forEach(rdata => {
          const rowObj = {};
          let idx = 0;

          headers.forEach(header => {
            rowObj[header] = rdata[idx];
            idx++;
          });

          jsonData.push(rowObj);
        });
      }
    });

    jsonData.forEach(jd => {
      if (jd.timeRemaining) {
        jd.timeRemaining = JSON.parse(jd.timeRemaining);
      }
    });

    return jsonData;
  }

}
