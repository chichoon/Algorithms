#include <stdio.h>

int	main(void)
{
	int	l;
	int	p;
	int	news[5];
	int	index;

	scanf("%d %d\n%d %d %d %d %d", &l, &p,
		&news[0], &news[1], &news[2], &news[3], &news[4]);
	index = -1;
	while (++index < 4)
		printf("%d ", news[index] - (l * p));
	printf("%d", news[index] - (l * p));
}
