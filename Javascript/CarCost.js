function rentalCarCost(d) {
  // Your solution here
  let tot=d*40;
  if(d>=7) return tot-50;
  else if(d>=3) return tot-20;
  else return tot;
}