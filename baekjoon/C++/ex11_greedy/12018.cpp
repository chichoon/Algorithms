#include <iostream>
#include <vector>
#include <algorithm>

int main(void) {
	int n, m, p, l;
	std::vector<int> v;
	int temp, sum = 0, result = 0;

	std::cin >> n >> m;

	for (int i = 0; i < n; i++) {
		std::cin >> p >> l;
		std::vector<int> v_temp;
		for (int j = 0; j < p; j++) {
			std::cin >> temp;
			v_temp.push_back(temp);
		}
		if (p < l)
			v.push_back(1);
		else {
			std::sort(v_temp.begin(), v_temp.end());
			v.push_back(v_temp[p - l]);
		}
	}
	std::sort(v.begin(), v.end());
	for (std::vector<int>::iterator it = v.begin(); it != v.end(); it++) {
		// std::cout << "sum: " << sum << ", miledge: " << m << " current: " << *it << "\n";
		result++;
		sum += *it;
		if (sum > m) {
			result -= 1;
			break;
		}
	}
	std::cout << result << "\n";
}
