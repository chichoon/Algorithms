#include <iostream>

int main(void) {
    int n, m, cnt = 0, sum = 0;

    std::cin >> n >> m;
    for (int i = 0; i < n; i++) {
        int book;
        std::cin >> book;
        sum += book;
        if (sum > m) {
            cnt++;
            sum = book;
        }
    }
    if (sum > 0) {
        cnt++;
    }

    std::cout << cnt;
}