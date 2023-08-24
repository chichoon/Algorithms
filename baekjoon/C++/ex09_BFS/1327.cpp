#include <iostream>
#include <map>
#include <string>
#include <queue>
#include <algorithm>

int n, k;
std::string str;
std::string sorted_str;
std::queue<std::pair<std::string, int> > que;
std::map<std::string, int> map;

int bfs() {
	std::string current;
	int cnt;
	que.push(std::make_pair(str, 0));

	while (!que.empty()) {
		current = que.front().first;
		cnt = que.front().second;
		que.pop();

		if (current == sorted_str) return cnt;
		if (map.find(current) != map.end()) continue;
		map.insert(std::make_pair(current, 1));
		for (int i = 0; i <= n - k; i++) {
			std::string substr = current.substr(i, k);
			std::reverse(substr.begin(), substr.end());
			substr = current.substr(0, i) + substr + current.substr(i + k, n - k);
			que.push(std::make_pair(substr, cnt + 1));
		}
	}
	return -1;
}

int main(void) {
	std::map<char, int> mp;
	char temp;

	std::cin >> n >> k;

	for (int i = 0; i < n; i++) {
		std::cin >> temp;
		str += temp;
		mp.insert(std::make_pair(temp, 0));
	}

	for (std::map<char, int>::iterator it = mp.begin(); it != mp.end(); it++) {
		sorted_str += it->first;
	}

	std::cout << bfs();
}
