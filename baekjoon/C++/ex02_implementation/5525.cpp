#include <iostream>
#include <string>


int main(void) {
	int n, m, cnt = 0, nOfOIs;
	std::string str;

	std::ios_base::sync_with_stdio(false);
	std::cin.tie(0);
	std::cout.tie(0);

	std::cin >> n >> m;
	std::cin >> str;

	for (int i = 0; i < m; i++) {
		nOfOIs = 0;
		if (str[i] == 'O')
			continue;
		while (str[i + 1] == 'O' && str[i + 2] == 'I') {
			nOfOIs++;
			i += 2;
			if (nOfOIs == n) {
				nOfOIs--;
				cnt++;
			}
		}
	}
	std::cout << cnt << "\n";
}
