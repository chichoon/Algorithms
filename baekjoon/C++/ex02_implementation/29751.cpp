#include <iostream>

int main(void) {
	double w, h;
	std::cin >> w >> h;
	std::cout.precision(1);
	std::cout << std::fixed;
	std::cout << w * h / 2;
}
