#include <iostream>
#include <string>

int main(void) {
	std::string str;
	std::string ans;
	int len;

	std::getline(std::cin, str);
	len = str.length();

	for (int i = 0; i < len; i++) {
		if (str[i] >= 'A' && str[i] <= 'Z') ans += str[i];
	}

	std::cout << (ans == "UCPC" ? "I love UCPC" : "I hate UCPC");
}
