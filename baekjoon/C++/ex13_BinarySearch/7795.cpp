#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>

int main(void) {
    std::ios_base::sync_with_stdio(false);
    std::cin.tie(0);
    std::cout.tie(0);

	int t, a, b, temp, result;
	int min, max, mid;
	std::vector<int> av, bv;

	std::cin >> t;

	for (int i = 0; i < t; i++) {
		result = 0;
		av.clear();
		bv.clear();
		std::cin >> a >> b;
		for (int j = 0; j < a; j++) {
			std::cin >> temp;
			av.push_back(temp);
		}
		for (int j = 0; j < b; j++) {
			std::cin >> temp;
			bv.push_back(temp);
		}

		std::sort(av.begin(), av.end());
		std::sort(bv.begin(), bv.end());

		for (int j = 0; j < a; j++) {
			min = 0;
			max = b - 1;
			while (min <= max) {
				mid = (min + max) / 2;
				if (av[j] > bv[mid])
					min = mid + 1;
				else
					max = mid - 1;
			}
			result += min;
		}
		std::cout << result << "\n";
	}
}
