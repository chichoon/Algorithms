#include <iostream>
#include <algorithm>
#include <vector>

int main(void) {
	std::vector<int> rv;
	std::vector<int> cv;
	int row, col, n, tmp1, tmp2, maxR = 0, maxC = 0;

	std::cin >> row >> col >> n;

	for (int i = 0; i < n; i++) {
		std::cin >> tmp1 >> tmp2;
		if (tmp1 == 0) rv.push_back(tmp2);
		else cv.push_back(tmp2);
	}
	rv.push_back(0);
	rv.push_back(col);
	cv.push_back(0);
	cv.push_back(row);

	std::sort(rv.begin(), rv.end());
	std::sort(cv.begin(), cv.end());

	int lenR = rv.size();
	int lenC = cv.size();

	for (int i = 1; i < lenR; i++)
		maxR = std::max(rv[i] - rv[i - 1], maxR);
	for (int i = 1; i < lenC; i++)
		maxC = std::max(cv[i] - cv[i - 1], maxC);

	std::cout << maxR * maxC << "\n";
}
