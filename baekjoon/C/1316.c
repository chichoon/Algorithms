#include <stdio.h>

int	check_letter(char str[101])
{
	int	alpha[26];
	int	index;

	index = -1;
	while (++index < 26)
		alpha[index] = 0;
	while (*(str + 1))
	{
		if (alpha[*str - 'a'])
			return (0);
		if (*str != *(str + 1))
			alpha[*str - 'a'] = 1;
		str++;
	}
	if (alpha[*str - 'a'])
		return (0);
	return (1);
}

void	init_str(char str[101])
{
	int	index;

	index = -1;
	while (++index < 101)
		str[index] = 0;
}

int	main(void)
{
	int		n;
	int		index;
	int		result;
	char	str[101];

	scanf("%d", &n);
	index = -1;
	result = 0;
	while (++index < n)
	{
		init_str(str);
		scanf("%s", str);
		result += check_letter(str);
	}
	printf("%d", result);
}
