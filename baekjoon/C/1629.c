#include <stdio.h>

unsigned long long	recur_pow(
	unsigned long long a, unsigned long long b, unsigned long long c)
{
	unsigned long long	tmp;

	if (b == 0)
		return (1);
	else if (b % 2 == 1)
		return (a * recur_pow(a, b - 1, c) % c);
	else
	{
		tmp = recur_pow(a, b / 2, c);
		return (((tmp % c) * (tmp % c)) % c);
	}
}

int	main(void)
{
	unsigned long long	a;
	unsigned long long	b;
	unsigned long long	c;

	scanf("%d %d %d", &a, &b, &c);
	printf("%d\n", recur_pow(a, b, c));
}
