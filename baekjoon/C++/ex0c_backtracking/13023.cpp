#include <iostream>
#include <queue>

std::vector<int> vec[2001];
bool visited[2001];
bool flag = false;

void dfs(int start_pos, int n, int cnt) {
	if (cnt == 5 || flag) {
		flag = true;
		return;
	}

	visited[start_pos] = true;
	for (int i = 0; i < vec[start_pos].size(); i++) {
		int pos = vec[start_pos][i];
		if (!visited[pos]) {
			dfs(pos, n, cnt + 1);
		}
	}
	visited[start_pos] = false;
}

int main(void) {
	int n, m, u, v;

	std::cin >> n >> m;
	for (int i = 0; i < m; i++) {
		std::cin >> u >> v;
		vec[u].push_back(v);
		vec[v].push_back(u);
	}

	for (int i = 0; i < n; i++) {
		dfs(i, n, 1);
		if (flag) {
			std::cout << "1";
			return 0;
		}
		flag = false;
	}
	std::cout << "0";
}
