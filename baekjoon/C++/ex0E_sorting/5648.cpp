#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

int main(void) {
	std::vector<unsigned long long> vec;
	std::string temp;
	int n;

	std::cin >> n;
	for (int i = 0; i < n; i++) {
		std::cin >> temp;
		std::reverse(temp.begin(), temp.end());
		vec.push_back(std::stoull(temp));
	}
	std::sort(vec.begin(), vec.end());

	for (int i = 0; i < n; i++) {
		std::cout << vec[i] << "\n";
	}
}
