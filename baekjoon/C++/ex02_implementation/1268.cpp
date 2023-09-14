#include <iostream>
#include <vector>

int n;
std::vector<int> class_arr[6][10];
bool student_arr[1001][1001];

int main(void) {
	int temp;
	int sum, max = -1, max_student;

	std::cin >> n;

	for (int i = 1; i <= n; i++) {
		for (int j = 1; j <= 5; j++) {
			std::cin >> temp;
			class_arr[j][temp].push_back(i);
		}
	}

	for (int j = 1; j <= 5; j++) {
		for (int k = 1; k <= 9; k++) {
			int size = class_arr[j][k].size();
			for (int i = 0; i + 1 < size; i++) {
				for (int l = i + 1; l < size; l++) {
					student_arr[class_arr[j][k][i]][class_arr[j][k][l]] = true;
					student_arr[class_arr[j][k][l]][class_arr[j][k][i]] = true;
				}
			}
		}
	}

	for (int i = 1; i <= n; i++) {
		int sum = 0;
		for (int j = 1; j <= n; j++) {
			if (student_arr[i][j]) sum++;
		}
		if (sum > max) {
			max = sum;
			max_student = i;
		}
	}
	std::cout << max_student << "\n";
}
