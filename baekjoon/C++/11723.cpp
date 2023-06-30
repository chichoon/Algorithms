#include <iostream>

int main(void) {
	int m, n, s = 0;
	std::string str;

	std::ios_base::sync_with_stdio(false);
	std::cin.tie(0);
	std::cout.tie(0);

	std::cin >> m;
	for (int i = 0; i < m; i++) {
		std::cin >> str;
		if (str == "add") {
			std::cin >> n;
			s |= (1 << n);
		}
		else if (str == "remove") {
			std::cin >> n;
			s &= ~(1 << n);
		}
		else if (str == "check") {
			std::cin >> n;
			if (s & (1 << n)) std::cout << "1\n";
			else std::cout << "0\n";
		}
		else if (str == "toggle"){
			std::cin >> n;
			s ^= (1 << n);
		}
		else if (str == "all")
			s = (1 << 21) - 1;
		else if (str == "empty")
			s = 0;
	}
}
