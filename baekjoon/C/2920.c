#include <stdio.h>

int	descend(int num[8])
{
	int	index;

	index = -1;
	while (++index < 7)
		if (num[index] < num[index + 1])
			break ;
	if (index != 7)
		printf("mixed");
	else
		printf("descending");
	return (0);
}

int	ascend(int num[8])
{
	int	index;

	index = -1;
	while (++index < 7)
		if (num[index] > num[index + 1])
			break ;
	if (index != 7)
		printf("mixed");
	else
		printf("ascending");
	return (0);
}

int	main(void)
{
	int	num[8];
	int	index;

	index = -1;
	while (++index < 8)
		scanf("%d", &num[index]);
	index = -1;
	if (num[0] < num[1])
		return (ascend(num));
	else
		return (descend(num));
}
