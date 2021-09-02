#include <stdio.h>
#include <unistd.h>

int	print_max(int count[26], int max, int max_index)
{
	int	index;
	int	max_flag;

	index = 0;
	max_flag = 0;
	while (index < 26)
		if (max == count[index++])
			max_flag++;
	if (max_flag != 1)
		printf("?");
	else
		printf("%c\n", max_index + 'A');
	return (0);
}

int	get_max(int count[26])
{
	int	max;
	int	max_index;
	int	index;

	index = 0;
	max = -1;
	max_index = 0;
	while (index < 26)
	{
		if (max < count[index])
		{
			max = count[index];
			max_index = index;
		}
		index++;
	}
	return (print_max(count, max, max_index));
}

int	main(void)
{
	char	str[1000001];
	int		index;
	int		count[26];

	read(0, str, 1000001);
	index = 0;
	while (index < 26)
		count[index++] = 0;
	index = 0;
	while (str[index])
	{
		if (str[index] - 'a' >= 0)
			count[(str[index]) - 'a'] += 1;
		else
			count[(str[index]) - 'A'] += 1;
		index++;
	}
	return (get_max(count));
}
