#include <iostream>

char arr[51][51];
int check[51][51];
int n, m;
bool flag = false;

void print_arr() {
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++)
			std::cout << arr[i][j];
		std::cout << "\n";
	}
}

int main(void) {
	std::cin >> n >> m;
	int row = 0, col = 0;

	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			std::cin >> arr[i][j];
		}
	}

	int cnt;
	for (int i = 0; i < n; i++) {
		cnt = 0;
		for (int j = 0; j < m; j++) {
			if (arr[i][j] != '.')
				break;
			cnt++;
		}
		if (cnt == m) row++;
	}

	for (int j = 0; j < m; j++) {
		cnt = 0;
		for (int i = 0; i < n; i++) {
			if (arr[i][j] != '.')
				break;
			cnt++;
		}
		if (cnt == n) col++;
	}

	std::cout << (row > col ? row : col);
}

