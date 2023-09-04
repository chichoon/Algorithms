#include <iostream>
#include <string>

int main(void) {
	std::string str;
	std::string ans = "UCPC";
	int len;
	int j = 0;

	std::getline(std::cin, str);
	len = str.length();

	for (int i = 0; i < len; i++) {
		if (str[i] == ans[j]) {
			j++;
		}
	}

	std::cout << (j == 4 ? "I love UCPC" : "I hate UCPC");
}
