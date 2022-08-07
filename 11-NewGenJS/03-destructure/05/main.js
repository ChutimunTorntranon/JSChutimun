let planetFacts = {
	numPlanets: 8,
	yearNeptuneDiscovered: 1846,
	yearMarsDiscovered: 1659,
};
let { numPlanets, ...discoveryYears } = planetFacts;
console.log(discoveryYears); // *//?
// discoveryYears เก็บค่า key และ value  yearNeptuneDiscovered: 1846,yearMarsDiscovered: 1659 ไว้
