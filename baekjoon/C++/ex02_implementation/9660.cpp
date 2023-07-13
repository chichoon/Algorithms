#include <iostream>

int main(void) {
	long long n;

	std::cin >> n;
	if (n % 7 == 0 || n % 7 == 2) std::cout << "CY\n";
	else std::cout << "SK\n";
}
