import requests
from bs4 import BeautifulSoup
from indeed_func import get_jobs as get_indeed_jobs
#자주 쓸 코드를 함수화하여 불러옴

indeed_jobs = get_indeed_jobs()
print(indeed_jobs)