#include <stdio.h>

int	main(void)
{
	int	n;
	int	a;
	int	b;
	int	index;

	index = -1;
	scanf("%d", &n);
	while (++index < n)
	{
		scanf("%d %d", &a, &b);
		printf("%d\n", a + b);
	}
}
