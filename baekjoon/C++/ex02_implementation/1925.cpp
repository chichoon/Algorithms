#include <iostream>
#include <cmath>
#include <algorithm>

int main(void) {
	std::pair<int, int> p[3];
	double first, second, third, max, min1, min2;
	bool isSame = false;

	for (int i = 0; i < 3; i++)
		std::cin >> p[i].first >> p[i].second;

	first = std::pow(p[0].first - p[1].first, 2) + std::pow(p[0].second - p[1].second, 2);
	second = std::pow(p[1].first - p[2].first, 2) + std::pow(p[1].second - p[2].second, 2);
	third = std::pow(p[0].first - p[2].first, 2) + std::pow(p[0].second - p[2].second, 2);
	max = std::max(std::max(first, second), third);

	if (max == first) { min1 = second, min2 = third; }
	else if (max == second) { min1 = third, min2 = first; }
	else { min1 = first, min2 = second; }
	if (min1 == min2 || min2 == max || max == min1) isSame = true;

	if (std::sqrt(max) >= std::sqrt(min1) + std::sqrt(min2)) {std::cout << "X\n"; return 0;}
	if (min1 == min2 && min2 == max) std::cout << "JungTriangle";
	else if (min1 + min2 == max) std::cout << "Jikkak" << (isSame ? "2" : "") << "Triangle";
	else if (min1 + min2 < max) std::cout << "Dunkak" << (isSame ? "2" : "") << "Triangle";
	else std::cout << "Yeahkak" << (isSame ? "2" : "") << "Triangle";
}
