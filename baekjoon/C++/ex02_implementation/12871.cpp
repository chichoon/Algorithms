#include <iostream>
#include <string>

int comp(std::string min, std::string max, int minlen, int maxlen, int lcm) {
	int minrepeat = lcm / minlen;
	int maxrepeat = lcm / maxlen;
	std::string mintemp = "";
	std::string maxtemp = "";

	while (minrepeat-- > 0)
		mintemp += min;
	while (maxrepeat-- > 0)
		maxtemp += max;

	return mintemp == maxtemp;
}

int lcm(int a, int b) {
	int c;
	int aTemp = a, bTemp = b;

	while (b != 0) {
		c = a % b;
		a = b;
		b = c;
	}
	return aTemp * bTemp / a;
}

int main(void) {
	std::string s, t;
	int slen, tlen, lcmlen;

	std::cin >> s >> t;
	slen = s.length();
	tlen = t.length();
	lcmlen = lcm(slen, tlen);
	if (slen > tlen)
		std::cout << comp(t, s, tlen, slen, lcmlen);
	else
		std::cout << comp(s, t, slen, tlen, lcmlen);
}
