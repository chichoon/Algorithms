#include <stdio.h>

int	main(void)
{
	int	a;
	int	b;
	int	c;

	scanf("%d %d %d", &a, &b, &c);
	printf("%d\n%d\n%d\n%d\n",
		(a + b) % c, ((a % c) + (b % c)) % c,
		(a * b) % c, ((a % c) * (b % c)) % c);
}