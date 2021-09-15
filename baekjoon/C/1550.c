#include <stdio.h>

int	main(void)
{
	char	str[7];
	int		index;
	int		num;

	index = -1;
	while (++index < 7)
		str[index] = 0;
	scanf("%s", str);
	index = -1;
	num = 0;
	while (str[++index])
	{
		num *= 16;
		if (str[index] <= '9' && str[index] >= '0')
			num += str[index] - '0';
		else
			num += str[index] - 'A' + 10;
	}
	printf("%d", num);
}
