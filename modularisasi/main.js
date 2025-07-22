/* 
- namanya tidak harus sama dengan 
  function/method/variable aslinya, 
  tapi harus default.

- Default import juga memungkinkan 
  kita untuk import function/method/variable 
  yang namanya ga harus sama dengan 
  function/method/variable aslinya.  
*/
/// DEFAULT
import Halo from "./export.js"; //
Halo();

/// NAMED
/* menuliskan nama function yang 
diimpor dalam kurung kurawal {}.*/
import { named } from "./export.js"; // named
named();

//IMPORT ALL
import * as fun from "./all.js";
fun.hai();
fun.halo();
fun.sopo();
fun.jarwo();

/// ALIAS
import { fun as userFun } from "./user.mjs";
import { fun as cusFun } from "./customer.js";
userFun();
cusFun();

// Kombinasikan antara default export dan named export
import halo, { namai } from "./kombinasi.js";
halo("Ukhasyah");
namai();

////// TEST
import * as mod from "./module.js";
console.log(mod.name);
console.log(mod.nameInArray);
mod.sayHello();
