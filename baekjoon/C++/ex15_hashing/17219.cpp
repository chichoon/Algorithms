#include <iostream>
#include <string>
#include <map>

std::map<std::string, std::string> mp;

int main(void) {
	int n, m;
	std::string p, q;

	std::ios_base::sync_with_stdio(false);
	std::cin.tie(0);
	std::cout.tie(0);
	std::cin >> n >> m;

	for (int i = 0; i < n; i++) {
		std::cin >> p >> q;
		mp.insert(std::make_pair(p, q));
	}
	for (int j = 0; j < m; j++) {
		std::cin >> p;

		std::cout << mp.find(p)->second << "\n";
	}
}
