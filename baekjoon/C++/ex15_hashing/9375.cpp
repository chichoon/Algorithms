#include <iostream>
#include <map>
#include <string>
#include <utility>

int main(void) {
	int n, m, mul;
	std::string name, category;
	std::map<std::string, int> mp;
	std::map<std::string, int>::iterator it;

	std::cin >> n;

	for (int i = 0; i < n; i++) {
		std::cin >> m;
		for (int j = 0; j < m; j++) {
			std::cin >> name >> category;
			it = mp.find(category);
			if (it == mp.end()) mp.insert(std::make_pair(category, 1));
			else it->second++;
		}
		mul = 1;
		for (it = mp.begin(); it != mp.end(); it++) {
			mul *= it->second + 1;
		}
		std::cout << mul - 1 << "\n";
		mp.clear();
	}
}
