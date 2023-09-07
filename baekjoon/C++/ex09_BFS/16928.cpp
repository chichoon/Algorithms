#include <iostream>
#include <queue>

int n, m;
int arr[30][2];
bool visited[101];
std::queue<std::pair<int, int> > que;

int bfs() {
	que.push(std::make_pair(1, 0));
	visited[1] = true;
	bool flag;

	while (!que.empty()) {
		std::pair<int, int> current = que.front();
		que.pop();
		visited[current.first] = true;

		for (int i = 1; i <= 6; i++) {
			flag = false;
			if (current.first + i == 100) return current.second + 1;
			if (visited[current.first + i]) continue;
			for (int j = 0; j < n + m; j++) {
				if (arr[j][0] == current.first + i) {
					que.push(std::make_pair(arr[j][1], current.second + 1));
					flag = true;
					break;
				}
			}
			if (!flag) que.push(std::make_pair(current.first + i, current.second + 1));
		}
	}

	return -1;
}

int main(void) {
	std::cin >> n >> m;

	for (int i = 0; i < n; i++) {
		std::cin >> arr[i][0] >> arr[i][1];
	}

	for (int i = n; i < n + m; i++) {
		std::cin >> arr[i][0] >> arr[i][1];
	}

	std::cout << bfs();
}
