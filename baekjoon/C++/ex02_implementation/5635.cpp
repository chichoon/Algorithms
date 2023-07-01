#include <iostream>
#include <map>

int main(void) {
	int n, day, month, year, age;
	std::string name;
	std::map<int, std::string> birthday;

	std::cin >> n;
	for (int i = 0; i < n; i++) {
		std::cin >> name >> day >> month >> year;
		age = (2020 - year) * 12 * 31 + (12 - month) * 31 + (31 - day);
		birthday[age] = name;
	}

	std::cout << birthday.begin()->second << "\n" << birthday.rbegin()->second << "\n";
}
