#include <iostream>

int main(void) {
	std::string str;

	std::getline(std::cin, str);
	int len = str.length();
	for (int i = 0; i + 1 < len; i++) {
		if ((str[i] == 'd' || str[i] == 'D') && str[i + 1] == '2') {
			std::cout << "D2";
			return 0;
		}
	}
	std::cout << "unrated";
}
