#include <stdio.h>

int	get_max(int scores[1001], int n)
{
	int	index;
	int	max;

	index = 0;
	max = -100;
	while (index < n)
	{
		if (max < scores[index])
			max = scores[index];
		index++;
	}
	return (max);
}

int	get_sum(int scores[1001], int n)
{
	int	index;
	int	sum;

	index = 0;
	sum = 0;
	while (index < n)
		sum += scores[index++];
	return (sum);
}

int	main(void)
{
	int		n;
	int		scores[1001];
	int		index;
	float	new_avr;

	index = 0;
	while (index < 1001)
		scores[index++] = -1;
	index = 0;
	scanf("%d\n", &n);
	while (index < n)
		scanf("%d", &scores[index++]);
	new_avr = (float)get_sum(scores, n) / (float)get_max(scores, n) * 100 / n;
	printf("%f\n", new_avr);
}
