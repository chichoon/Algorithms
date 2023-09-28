#include <iostream>

int main(void) {
	int soongsil, korea, hanyang;

	std::cin >> soongsil >> korea >> hanyang;
	int min = std::min(soongsil, std::min(korea, hanyang));

	if (soongsil + korea + hanyang >= 100) std::cout << "OK";
	else if (min == soongsil) std::cout << "Soongsil";
	else if (min == korea) std::cout << "Korea";
	else if (min == hanyang ) std::cout << "Hanyang";
}
