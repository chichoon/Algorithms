#include <stdio.h>

int	main(void)
{
	unsigned long long	a;
	unsigned long long	b;
	unsigned long long	v;

	scanf("%lld %lld %lld", &a, &b, &v);
	if ((v - a) % (a - b) == 0)
		printf("%llu", (v - a) / (a - b) + 1);
	else
		printf("%llu", (v - a) / (a - b) + 2);
}
