#include <stdio.h>

int	main(void)
{
	int	a;
	int	b;

	scanf("%d %d", &a, &b);
	while (a && b)
	{
		printf("%d\n", a + b);
		scanf("%d %d", &a, &b);
	}
}
