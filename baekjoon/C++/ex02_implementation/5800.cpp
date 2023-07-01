#include <iostream>
#include <vector>
#include <algorithm>

int main(void) {
	int k, n, temp, sub, max_sub;
	std::vector< std::vector<int> > vect;
	std::vector<int> sub_vect;
	std::cin >> k;

	for (int i = 0; i < k; i++) {
		std::cin >> n;
		std::vector<int> class_vect;
		max_sub = -1;
		for (int j = 0; j < n; j++) {
			std::cin >> temp;
			class_vect.push_back(temp);
		}
		std::sort(class_vect.begin(), class_vect.end());
		for (int j = 0; j < n - 1; j++) {
			sub = abs(class_vect[j] - class_vect[j + 1]);
			if (max_sub < sub) max_sub = sub;
		}
		sub_vect.push_back(max_sub);
		vect.push_back(class_vect);
	}
	for (int i = 0; i < k; i++) {
		std::cout << "Class " << i + 1 << "\n";
		std::cout << "Max " << *vect[i].rbegin() << ", Min " << *vect[i].begin() << ", Largest gap " << sub_vect[i] << "\n";
	}
}
