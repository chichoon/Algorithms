#include <iostream>
#include <map>
#include <string>

std::map<std::string, int> mp;

int main(void) {
	int n, m;
	std::string temp;

	std::cin >> n;

	for (int i = 0; i < n; i++) {
		std::cin >> temp >> m;
		if (mp.find(temp) != mp.end()) mp.find(temp)->second += m;
		else mp.insert(std::make_pair(temp, m));
	}
	for (std::map<std::string, int>::iterator it = mp.begin(); it != mp.end(); it++) {
		if (it->second == 5) {
			std::cout << "YES";
			return 0;
		}
	}

	std::cout << "NO";
}
