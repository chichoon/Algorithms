#include <stdio.h>

int	get_score(char ox[81])
{
	int	adder;
	int	score;
	int	index;

	adder = 1;
	index = 0;
	score = 0;
	if (ox[0] == 'O')
		score += adder;
	while (ox[++index])
	{
		if (ox[index] == 'O')
		{
			if (ox[index - 1] == 'O')
				adder++;
			score += adder;
		}
		else
			adder = 1;
	}
	return (score);
}

int	main(void)
{
	int		n;
	char	ox[81];
	int		index;

	index = -1;
	scanf("%d", &n);
	while (++index < n)
	{
		scanf("%s", ox);
		printf("%d\n", get_score(ox));
	}
}
