import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
@Injectable()
export class AppService {
  getHello(): string {
    exec(
      'php /Users/dohongthao/Documents/test_ioncube/src/php/test.php',
      (_, out) => {
        console.log('first', out);
      },
    );
    return 'Hello World!';
  }
}
