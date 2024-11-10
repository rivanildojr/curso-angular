import { Pipe, PipeTransform } from '@angular/core';

import { ArrayFilterPipe } from './array-filter.pipe';

@Pipe({
  name: 'arrayFilterImpure',
  standalone: true,
  pure: false,
})
export class ArrayFilterImpurePipe extends ArrayFilterPipe {

}
