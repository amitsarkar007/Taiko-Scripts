# Taiko Automation

Using [Taiko](https://github.com/getgauge/taiko) for user journey automation.

## Software needed for script execution

* Operating System - **Microsoft Windows 10**
* IDE - **[Microsoft Visual Studio Code](https://code.visualstudio.com/Download)**
* JavaScript runtime - **[Node.js](https://nodejs.org/en/download/)**
* Browser - **[Chromium](https://github.com/chromium/chromium)** (downloaded during installation of Taiko)

## Programming language used

* [JavaScript (JS)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Node package needed for script execution

* [Taiko](https://www.npmjs.com/package/taiko) - Install globally on your machine using the code
    ```
    npm install -g taiko
    ```    
* [Lighthouse](https://www.npmjs.com/package/lighthouse) - This is for generating Google Lighthouse reports. Install globally on your machine using the code below.
    ```
    npm install -g lighthouse
    ```
* [dotenv](https://www.npmjs.com/package/dotenv) - This is for using variables in your code. Install globally on your machine using the code below.
    ```
    npm install -g dotenv
    ```
* [Taiko Screencast plugin](https://www.npmjs.com/package/taiko-screencast) - This is for creating a gif for your code execution. Install globally on your machine using the code below.
    ```
    npm install -g taiko-screencast
    ```    

* [Taiko Diagnostics plugin](https://www.npmjs.com/package/taiko-diagnostics) - This provides some diagnostics features like measuring speedindex, performance metrics of webpage. Install globally on your machine using the code below.
    ```
    npm install -g taiko-diagnostics
    ```    

## Check installed node packages

```
npm list -g --depth 0
```

## How to execute

* Type the following in your terminal if you are executing the code from the **folder in which the script exists**
    ```
    taiko <filename>
    ```
* Type the following in your terminal if you are executing the code from the **folder in which the script doesn't exist**
    ```
    taiko <full file path with filename>
    ```

## How to execute with plugin

* Type the following in your terminal if you are executing the code from the **folder in which the script exists**
    ```
    taiko <filename> --plugin <plugin name>
    ```
* Type the following in your terminal if you are executing the code from the **folder in which the script doesn't exist**
    ```
    taiko <full file path with filename> --plugin <plugin name>
    ```

## How to use environment variables
* Variables you can use - [Taiko environment variables](https://docs.taiko.dev/#taiko-env-variables)
* How to use variables - [Set an Environment Variable in Windows - GUI](http://www.dowdandassociates.com/blog/content/howto-set-an-environment-variable-in-windows-gui/)
* Screenshot for reference below -<br>
![envVariable](/envVariable.png)
* Alternatively try this command on Windows<br>
    ```
    setx <variable name> "value"
    ```

## Code execution demo on YouTube
* [Rapha.cc](https://www.youtube.com/watch?v=0ErzwZyZDgY) - _Taiko-Rapha.js_
* [BT.com](https://www.youtube.com/watch?v=-orYOGBYRQc) - _Taiko-BT.js_
* [The-Internet.Herokuapp.com](https://www.youtube.com/watch?v=dp1PeXhXYI4) - _Taiko-InternetHerokuApp.js_

## Container execution
#### NOTE - Please make sure the script you want to execute is running in headless mode
1. Clone this repo to your local machine
1. Change to repo directory
1. Build a docker image using the command
    ```
    docker build -t <name-of-docker-image> .
    ```
    Sample output
    ```
    neo@ubuntu:~/Downloads/Taiko-Scripts$ sudo docker build -t taiko-new .
    Sending build context to Docker daemon  166.4kB
    Step 1/11 : FROM node:12.18.0-stretch-slim AS builder
     ---> 775e76326355
    Step 2/11 : LABEL maintainer="Amit Sarkar"
     ---> Using cache
     ---> 16c418215d43
    Step 3/11 : USER root
     ---> Using cache
     ---> de55399c5f56
    Step 4/11 : RUN apt-get update && apt-get install -yq     gconf-service libasound2 libatk1.0-0  libatk-bridge2.0-0 libc6 libcairo2 libcups2 libdbus-1-3     libexpat1 libfontconfig1 libgcc1     libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4     libpango-1.0-0     libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1     libxcursor1  libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6       ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget git      unzip fontconfig locales --no-install-recommends
     ---> Using cache
     ---> 9a6c8fc64165
    Step 5/11 : RUN groupadd -r test && useradd -r -m -g test test &&     chown -R test:test /home/ test/ &&     npm install -g taiko@1.0.12 --unsafe-perm=true
     ---> Using cache
     ---> 5e1ab933d48a
    Step 6/11 : WORKDIR /home/test/Taiko-Scripts/
     ---> Using cache
     ---> 78b7b19f611e
    Step 7/11 : RUN chown -R test:test /home/test/Taiko-Scripts/
     ---> Using cache
     ---> 614862fa0513
    Step 8/11 : FROM builder
     ---> 614862fa0513
    Step 9/11 : USER test
     ---> Using cache
     ---> e343d0570b66
    Step 10/11 : COPY --chown=test:test . .
     ---> 6df694696724
    Step 11/11 : CMD taiko Taiko-GoogleSearch-Headless.js
     ---> Running in 1c9e2cfde772
    Removing intermediate container 1c9e2cfde772
     ---> b634726d8c82
    Successfully built b634726d8c82
    Successfully tagged taiko-new:latest
    ```
1. Verify image created successfully by running following code
    ```
    docker run -it <name-of-docker-image> bash
    ```
    Sample output
    ```
    neo@ubuntu:~/Downloads/Taiko-Scripts$ sudo docker run -it taiko-new bash
    test@f0c2a6f3b48f:~/Taiko-Scripts$ ls -ltr
    total 108
    -rw-rw-r-- 1 test test 2516 Jun 26 13:16 Taiko-UltimateQA.js
    -rw-rw-r-- 1 test test 1268 Jun 26 13:16 Taiko-TotalJobs.js
    -rw-rw-r-- 1 test test 3329 Jun 26 13:16 Taiko-ToDoMVC.js
    -rw-rw-r-- 1 test test 2189 Jun 26 13:16 Taiko-Skyscanner.js
    -rw-rw-r-- 1 test test 1369 Jun 26 13:16 Taiko-Reed.js
    -rw-rw-r-- 1 test test  500 Jun 26 13:16 Taiko-Redirect.js
    -rw-rw-r-- 1 test test 2431 Jun 26 13:16 Taiko-Rapha.js
    -rw-rw-r-- 1 test test  993 Jun 26 13:16 Taiko-OB.js
    -rw-rw-r-- 1 test test 1273 Jun 26 13:16 Taiko-Lighthouse.js
    -rw-rw-r-- 1 test test 4374 Jun 26 13:16 Taiko-InternetHerokuApp.js
    -rw-rw-r-- 1 test test 1599 Jun 26 13:16 Taiko-HTML5DragDrop.js
    -rw-rw-r-- 1 test test  907 Jun 26 13:16 Taiko-GoogleSearchSuper.js
    -rw-rw-r-- 1 test test  611 Jun 26 13:16 Taiko-GoogleSearch.js
    -rw-rw-r-- 1 test test  743 Jun 26 13:16 Taiko-GoogleSearch-Headless.js
    -rw-rw-r-- 1 test test 2274 Jun 26 13:16 Taiko-GoogleFlights.js
    -rw-rw-r-- 1 test test  897 Jun 26 13:16 Taiko-Giftli.js
    -rw-rw-r-- 1 test test 5254 Jun 26 13:16 Taiko-CompareTheMarket.js
    -rw-rw-r-- 1 test test 5387 Jun 26 13:16 Taiko-CompareTheMarket-Headless.js
    -rw-rw-r-- 1 test test 1343 Jun 26 13:16 Taiko-BT.js
    -rw-rw-r-- 1 test test 1463 Jun 26 13:16 Taiko-BT-Headless.js
    -rw-rw-r-- 1 test test 1739 Jun 26 13:16 README.md
    -rw-rw-r-- 1 test test  894 Jun 26 13:16 OB.ico
    -rw-rw-r-- 1 test test 1068 Jun 26 13:16 LICENSE
    -rw-rw-r-- 1 test test 1506 Jun 26 14:56 Dockerfile
    ```
1. Run Docker image using the command
    ```
    docker run -t <name-of-docker-image>
    ```
    Sample output
    ```
    neo@ubuntu:~/Downloads/Taiko-Scripts$ sudo docker run -t taiko-new
     ✔ Browser opened
     ✔ Navigated to URL http://google.com
     ✔ Wrote Gauge Taiko into the focused element.
     ✔ Clicked element matching text "Google Search" 1 times
     ✔ Browser closed
    ```
1. Run another Taiko script using the command
    ```
    docker run -t <name-of-docker-image> taiko <name-of-taiko-script>
    ```
    Sample output
    ```
    neo@ubuntu:~/Downloads/Taiko-Scripts$ sudo docker run -t taiko-new taiko Taiko-BT-Headless.js
     ✔ Browser opened
     ✔ Navigated to URL http://bt.com
     ✔ Clicked element matching text "OK" 1 times
     ✔ Clicked element matching text "Broadband" 1 times
     ✔ Clicked element matching text "Fibre broadband" 1 times
     ✔ Clicked element matching text "See broadband deals" 1 times
     ✔ Clicked element matching text "Add and continue" 1 times
     ✔ Wrote BR3 4AS into the text field with label Postcode 
     ✔ Clicked element matching text "Check availability" 1 times
    " ✔ Clicked custom selector $(//*[contains(text(),'55')]) 1 times"
     ✔ Clicked element matching text "Confirm address" 1 times
     ✔ Browser closed
    ```
## Remove all docker resources

Clean all docker images/containers/volumes using this [bash script](https://gist.github.com/rafaelaazevedo/bec6cf339888bbac60336d01193ae923) by [Rafaela Azevedo](https://github.com/rafaelaazevedo)

## Syntax help
[Taiko documentation](https://docs.taiko.dev/)