#include <iostream>
#include <vector>
#include <queue>

int arr[51][51] = {0};
std::vector<int> parties[51];
int visited[51];
std::queue<int> que;

void bfs(int n) {
	while (!que.empty()) {
		int current = que.front();
		visited[current] = 1;
		que.pop();
		for (int i = 1; i <= n; i++) {
			if (arr[i][current] == 1 && visited[i] == 0) {
				visited[i] = 1;
				que.push(i);
			}
		}
	}
}

int main(void) {
	int n, m, l, temp;
	int count = 0;

	std::cin >> n >> m >> l;
	for (int i = 0; i < l; i++) {
		std::cin >> temp;
		que.push(temp);
	}

	for (int i = 0; i < m; i++) {
		std::cin >> l;
		for (int j = 0; j < l; j++) {
			std::cin >> temp;
			parties[i].push_back(temp);
		}

		for (int j = 0; j < l; j++) {
			if (j == l - 1) continue;
			arr[parties[i][j]][parties[i][j + 1]] = 1;
			arr[parties[i][j + 1]][parties[i][j]] = 1;
		}
	}

	bfs(n);

	for (int i = 0; i < m; i++) {
		for (std::vector<int>::iterator it = parties[i].begin(); it != parties[i].end(); it++) {
			if (visited[*it] == 1) {
				count++;
				break;
			}
		}
	}
	std::cout << m - count;
}
