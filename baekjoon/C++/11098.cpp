#include <iostream>
#include <map>

int main(void) {
	int n, p, cost;
	std::string name;

	std::cin >> n;

	for (int i = 0; i < n; i++) {
		std::cin >> p;
		std::map<int, std::string> players;
		std::map<int, std::string>::iterator it;

		for (int j = 0; j < p; j++) {
			std::cin >> cost >> name;
			players[cost] = name;
		}

		std::cout << (players.rbegin())->second << "\n";
	}
}

