#include <stdio.h>

int	main(void)
{
	int	id;
	int	index;
	int	sum;

	index = -1;
	sum = 0;
	while (++index < 5)
	{
		scanf("%d", &id);
		sum += id * id;
	}
	printf("%d\n", sum % 10);
}
