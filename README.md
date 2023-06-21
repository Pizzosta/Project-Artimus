![Project_Artimus Logo](./images/)

## Contents :accessibility:

- [Description](#Description)
- [Environment](#Environment)
- [Further Information](#Furtherinformation)
- [Repo Contents](#FileContents)
- [Installation](#Installation)
- [Built with](#Built-with)
- [Version](#Version)
- [License](#License)
- [Acknowledgements](#Acknowledgements)
- [Contact](#Contact)

## Description 📄
Project Artimus is a web application aimed at providing comprehensive security testing and analysis services for websites, web applications, and servers. With a focus on identifying vulnerabilities and recommending actions to enhance security, Project Artimus helps clients ensure the safety and protection of their digital assets.

## Environment 💻
The console was developed on Ubuntu 20.04 LTS using python3 (version 3.8.5) and adheres to pep8 style documentaion.

## Further information 📑
For further information on python version, and documentation style visit [python.org](https://www.python.org/).

## Repo Contents 📂
This repository constains the following files:

|   **File**   |   **Description**   |
| -------------- | --------------------- |
|[AUTHORS](./AUTHORS) | Contains info about authors of the project |

## API Documentation 📋
* POST /api/test: Initiates a new security test based on the provided parameters
* GET /api/test/{test_id}: Retrieves the status and results of a specific security test.
* GET /api/test/recent: Retrieves the list of recent security tests.
* GET /api/report/{report_id}: Retrieves the analysis report for a specific test.
* POST /api/report/{report_id}/feedback: Submits feedback on a specific analysis report.

## Installation 🛠️
- Clone the repository: git clone https://github.com/yourusername/project-artimus.git
- Navigate to the project directory: cd project-artimus
- Install the required dependencies: pip install -r requirements.txt
- Set up the MySQL database and configure the connection details in the configuration file.
- Run the application: python3 app.py
- Access the web application by visiting http://localhost:5000 in your web browser.


## Built with ⚙️
* Front-end Development: HTML, CSS - Bootstrap, JavaScript
* Back-end Development: Python 3, Flask, MySQL DB
* General Development Tools: Fabric
* Cybersecurity Tools: Wireshark, Aircrack-ng, Metasploit, Net-cat, Burp Suite, Nikto, Fuzzdb, sqlmap
* Testing Tools: Selenium, Unittest, JMeter

## Version 📌
ProjectArtimus - version 0.1

##License 🌐
Public Domain. No copy write protection.

## Acknowledgements 🙌
To all the peers of ALX Software Engineers cohort10 that contribuited with their knowledge

## Contact 📬
If you have any questions or suggestions regarding Project Artimus, please feel free to send an email
