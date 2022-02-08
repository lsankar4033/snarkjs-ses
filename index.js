import 'ses';
import { readFileSync } from 'fs';

// NOTE: may need to relax constraints:
//{
  //consoleTaming: 'unsafe',
  //errorTaming: 'unsafe',
  //mathTaming: 'unsafe',
  //dateTaming: 'unsafe',
  //overrideTaming: 'severe',
//}
lockdown();

// NOTE: may need to pass in date and such
const c = new Compartment();

c.evaluate(
  readFileSync('./main.cjs', 'utf8')
)
