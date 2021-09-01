#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int	find_max(int *arr, int n)
{
	int	i;
	int	max;

	i = 0;
	max = -1;
	while (i < n)
	{
		if (max < arr[i])
			max = arr[i];
		i++;
	}
	return (max);
}

int	upper(int *arr, int n)
{

}

int	bitonic(int *arr, int n)
{
	int	i;
	int	len;
	int	len_max;
	int	arr_max;

	i = 0;
	len = 0;
	len_max = -1;
	arr_max = -1;
	while (i < n)
	{
		if (arr_max < 0 && arr[i] > arr[i + 1])
		{
			arr_max = arr[i];
			printf("arr_max = %d\n", arr_max);
		}
		if ((arr_max < 0 && arr[i] > arr[i + 1])
			|| (arr_max > 0 && arr[i] < arr[i + 1]))
		{
			printf("arr_max: %d, arr: %d %d\n", arr_max, arr[i], arr[i + 1]);
			if (len_max < len)
				len_max = len;
			arr_max = -1;
			continue ;
		}
		i++;
		len++;
	}
	return (len_max);
}

int	main(void)
{
	int	n;
	int	*arr;
	int	index;

	index = 0;
	scanf("%d", &n);
	arr = (int *)malloc(sizeof(int) * n);
	while (index + 1 < n)
	{
		scanf("%d ", &arr[index++]);
	}
	scanf("%d", &arr[index]);
	printf("%d\n", bitonic(arr, n));
}
