#include <iostream>

int main(void) {
	int minguk, manse, temp;
	minguk = 0;
	manse = 0;

	for (int i = 0; i < 4; i++) {
		std::cin >> temp;
		minguk += temp;
	}

	for (int i = 0; i < 4; i++) {
		std::cin >> temp;
		manse += temp;
	}

	std::cout << (minguk < manse ? manse : minguk);
}
