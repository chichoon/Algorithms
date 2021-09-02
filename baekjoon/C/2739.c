#include <stdio.h>

int	main(void)
{
	int	n;
	int	i;

	scanf("%d", &n);
	i = 0;
	while (++i < 10)
		printf("%d * %d = %d\n", n, i, n * i);
}
