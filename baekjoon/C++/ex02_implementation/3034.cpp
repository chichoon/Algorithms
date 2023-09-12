#include <iostream>
#include <cmath>

int main(void) {
	int n, temp;
	float w, h;

	std::cin >> n >> w >> h;
	double len = sqrt(pow(w, 2) + pow(h, 2));

	for (int i = 0; i < n; i++) {
		std::cin >> temp;
		if (len >= temp) std::cout << "DA\n";
		else std::cout << "NE\n";
	}
}
