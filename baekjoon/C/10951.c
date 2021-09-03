#include <stdio.h>

int	main(void)
{
	int	a;
	int	b;

	while (scanf("%d %d", &a, &b) > 0)
		printf("%d\n", a + b);
}
