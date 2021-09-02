#include <stdio.h>

void	init_char(char *s)
{
	int	index;

	index = -1;
	while (++index < 20)
		s[index] = 0;
}

void	print_char(char *str, int p)
{
	int	i;

	while (*str)
	{
		i = -1;
		while (++i < p)
			printf("%c", *str);
		str++;
	}
	printf("\n");
}

int	main(void)
{
	int		n;
	int		p;
	int		index;
	char	s[20];

	scanf("%d", &n);
	index = -1;
	while (++index < n)
	{
		init_char(s);
		scanf("%d %s", &p, s);
		print_char(s, p);
	}
}
