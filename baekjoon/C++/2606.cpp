#include <iostream>
#include <queue>

int bfs(int n, int arr[101][101], int cpu[101]) {
	std::queue<int> list;
	int ans = 0;

	list.push(1);
	cpu[1] = 1;

	while (!list.empty()) {
		int visited_now = list.front();
		list.pop();

		for (int i = 1; i <= n; i++) {
			if (arr[visited_now][i] && !cpu[i]) {
				cpu[i] = 1;
				ans++;
				list.push(i);
			}
		}
	}
	return ans;
}

int main(void) {
	int n, m, x, y;
	int arr[101][101] = {0};
	int cpu[101] = {0};

	std::cin >> n >> m;

	for (int i = 0; i < m; i++) {
		std::cin >> x >> y;
		arr[x][y] = 1;
		arr[y][x] = 1;
	}
	cpu[1] = 1;

	int ans = bfs(n, arr, cpu);
	std::cout << ans << "\n";
}
