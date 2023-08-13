function formatPopulation(population) {
	return isNaN(population)
		? ''
		: population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export default formatPopulation;
