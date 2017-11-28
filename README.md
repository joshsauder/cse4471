# Website Exploit Project
This project was designed to create tools to inform users about potential website exploits when creating their own websites. The project was split into
three parts:
* An "exploit" webpage designed to show examples of what potential website exploits look like in a website and how they are harmful
* A "safe" webpage designed to give more background information about these exploits and give tips on how to fix/remove them from your website
* A security checker to use webscraping to search for vulnerabilities on your website

## exploit-webpage
A webpage designed to display common website exploits and give examples of what they could look like in your website. This webpage was designed using
HTML, CSS, AngularJS, NodeJS, and deployed using Heroku.

### Collaborators
* Richard Feldtz
* Sam Lewis
* Josh Sauder

### Exploits Covered
* SQL Injection
* HTTP vs. HTTPS
* Cross-Site Scripting (XSS)
* Username Enumeration
* HTTP Response Splitting
* Poorly Secured Passwords
* HTTP Parameter Pollution
* Weak Passwords

### URL
https://cse4471securityexploit.herokuapp.com

## safe-webpage
A website designed to give background information about common website exploits and how attackers typically exploit them. This website provides examples of ways to help secure your own website from these exploits. It was designed using HTML, CSS, AngularJS, PHP, and deployed using Heroku.

### Collaborators
* Richard Feldtz
* Sam Lewis
* Josh Sauder

### Exploits Covered
* SQL Injection
* HTTP vs. HTTPS
* Cross-Site Scripting (XSS)
* Username Enumeration
* HTTP Response Splitting
* Poorly Secured Passwords
* HTTP Parameter Pollution
* Weak Passwords

### URL
https://cse4471-safe-exploit-webpage.herokuapp.com

### Research
Extensive research was done to gather the information that was reported on each section of the website. Sources and further readings are listed on individual exploit pages in the safe website.

## security-checker
Automated penetration testing tool that uses web scraping to search for vulnerabilities on web pages. It is a Ruby script that uses the gems Mechanize and Nokogiri.

### Instructions
First, make sure Ruby and all required gems are installed on your device. Then, type `ruby scraper_poc.rb` in the terminal. When prompted, enter the url of the site you wish to test. For best results, the url should point to a page that takes user input, such as a login page. The tool will attempt several common web exploits on your page, then output the results of the tests to the console. It will print advice on how to improve your sites security.

### Collaborators
* Katie Adamsky
* Trevor Monteforte
* Allison Salach

### Implemented features
* Checks for HTTP vs HTTPS
* Uses parameter polution via duplication and added parameters, and compares differences in the http response
* Checks to see if password attempts are limited and attempts multiple bad passwords
* Checks for cross site scripting (XSS) vulnerabilities

### Notes
Due to the nature of Mechanize, there were certain features that could not be implemented fully.
* Mechanize cannot execute Javascript, so the security checker can only check if a script can be injected, not if it can be executed
* Mechanize cannot open local HTML files, so all sites you wish to test must be live on the Internet
* Web scraping is inherently brittle, so it may not be able to find some forms on your web site. We do not recommend using this tool as your only form of testing, but it is an excellent starting point
