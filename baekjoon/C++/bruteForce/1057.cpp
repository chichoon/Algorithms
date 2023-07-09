#include <iostream>

int main(void) {
	int n, kim, lim, cnt = 1;;
	std::cin >> n >> kim >> lim;

	while (n > 0) {
		if (kim % 2 == 1 && kim == lim - 1) break;
		if (lim % 2 == 1 && lim == kim - 1) break;
		n = n / 2;
		if (kim % 2 == 0) kim = kim / 2;
		else kim = kim / 2 + 1;
		if (lim % 2 == 0) lim = lim / 2;
		else lim = lim / 2 + 1;
		cnt++;
	}
	std::cout << cnt << "\n";
}
