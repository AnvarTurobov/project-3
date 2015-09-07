var totalGen = 19;
var totalMW = 0;

for (gen = 1; gen >= totalGen; gen++) {
  if (gen % 2 != 0) {
    console.log("Generator #" + gen + " is off.");
  }
  else if (gen % 2 == 0 && gen <= 4) {
    totalMW += 62;
    console.log("Generator #"gen + " is on, adding 62 MW, for a total of " + totalMW + " MW!");
  } else (gen % 2 == 0 && gen <= totalGen) {
    totalMW += 124;
    console.log("Generator #"gen + " is on, adding 124 MW, for a total of " + totalMW + " MW!");
  }