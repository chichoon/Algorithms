#include <stdio.h>
#include <stdlib.h>

int	main(void)
{
	char	*str;
	char	*str_backup;
	int		count;

	count = 0;
	str = (char *)malloc(sizeof(char) * 1000000);
	str_backup = str;
	scanf("%[^\n]", str);
	if ((*str >= 'a' && *str <= 'z')
		|| (*str >= 'A' && *str <= 'Z'))
		count++;
	while (*(str + 1))
	{
		if (*str == ' '
			&& ((*(str + 1) >= 'a' && *(str + 1) <= 'z')
				|| (*(str + 1) >= 'A' && *(str + 1) <= 'Z')))
			count++;
		str++;
	}
	printf("%d", count);
	free(str_backup);
}
