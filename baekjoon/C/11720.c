#include <stdio.h>

int	main(void)
{
	int		n;
	int		index;
	char	tmp;
	int		sum;

	index = -1;
	sum = 0;
	scanf("%d\n", &n);
	while (++index < n)
	{
		scanf("%c", &tmp);
		sum += (tmp - '0');
	}
	printf("%d", sum);
}
