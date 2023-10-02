#include <iostream>

int whos_win(char p1, char p2) {
	if (p1 == 'R')
		return (p1 - p2) == 0 ? 0 : ((p1 - p2) * -2 + 1) / 3;
	if (p1 == 'P')
		return (p1 - p2) == 0 ? 0 : ((p1 - p2) * 2 + 5);
	return (p1 - p2) == 0 ? 0 : ((p1 - p2) - 2);
}

int main(void) {
	int n;
	std::cin >> n;

	for (int i = 0; i < n; i++) {
		int m, sum = 0;
		char p1, p2;
		std::cin >> m;
		for (int j = 0; j < m; j++) {
			std::cin >> p1 >> p2;
			sum += whos_win(p1, p2);
		}
		std::cout << (sum == 0 ? "TIE\n" : (sum < 0 ? "Player 2\n" : "Player 1\n"));
	}
}
