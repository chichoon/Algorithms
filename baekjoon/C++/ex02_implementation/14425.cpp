#include <iostream>
#include <map>
#include <string>

std::map<std::string, bool> mp;

int main(void) {
	int n, m;
	std::string temp;
	int cnt = 0;

	std::cin >> n >> m;

	for (int i = 0; i < n; i++) {
		std::cin >> temp;
		mp.insert(std::make_pair(temp, true));
	}

	for (int i = 0; i < m; i++) {
		std::cin >> temp;
		if (mp.find(temp) != mp.end()) cnt++;
	}

	std::cout << cnt;
}
