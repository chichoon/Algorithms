#include <stdio.h>

int	main(void)
{
	int	n;
	int	i;

	scanf("%d", &n);
	i = 0;
	while (++i < n + 1)
		printf("%d\n", i);
}
