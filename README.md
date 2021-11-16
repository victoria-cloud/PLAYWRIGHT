Allure-playwright experimental reporter:

1) Install experimental allure playwright reporter with the following command:
   npm i -D experimental-allure-playwright (done)

2) Install allure-commandline tool to work with it in terminal:
   npm i -D allure-commandline (done)

usage:
3) run test:
   npx playwright test --reporter=line,experimental-allure-playwright

   =>we’re going to see new allure-results folder in our root directory, which contains few json files
4) using allure command line tool we can generate HTML report based on the json files that we have in
   the allure-results folder by running the command:
   
   npx allure generate ./allure-results --clean

   it will create allure-report folder. 

5) To open it we have another allure command line command and it’s open :
   npx allure open ./allure-report

   
       