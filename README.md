# To Do List Application
This application consists of three (3) pages
1. The Index.tsx represents the Home Page where the Main To Do List Application is located
2. Quotes represents a page with an API usage which pulls in Quotes from https://dummyjson.com/quotes
3. Breather is a Countdown Timer

## Home Page (Index.tsx)

<div align="center">
    <img width="206" height="622" alt="simulator_screenshot_30D8BDEE-0D86-4059-8386-39858C2885F3" src="https://github.com/user-attachments/assets/c7782bed-d3d1-4bd3-a5a5-170dd23f1aa1" />
    <img width="206" height="622" alt="simulator_screenshot_570C844A-1990-422D-8361-1184CDBF8F13" src="https://github.com/user-attachments/assets/650e7b18-692a-4ba3-9bc5-1404f6d0b4dc" />
</div>

</n>

- Explanation
  
        The main page displays this when there are no Tasks displayed. On the Screen, there exists a Progress tracker percentage according to the amount of tasks             displayed and checked tasks (tasks that have been completed). The number of tasks displayed and the checked tasks are counted through a useState that tracks the           amount of onPress() actions have been executed towards the "Add" and "Check" buttons. The deletion button works to remove the task displayed completely and deduct an      index from both the check and amount of tasks done.


## Motivation (quotes.tsx) 

<div align="center">
    <img width="206" height="622" alt="simulator_screenshot_739A0FFF-D6EA-4850-B03A-75C0811D7356" src="https://github.com/user-attachments/assets/d757f153-d330-47ff-9b0c-95e802fca899" />
    <img width="206" height="622" alt="simulator_screenshot_0B657F9F-F4C1-4616-8455-B97EAF75EF60" src="https://github.com/user-attachments/assets/0887088d-5d71-4d68-8ff3-8659a0ae8e7a" />
    <img width="206" height="622" alt="simulator_screenshot_EFC13A78-1EFF-4A06-A7FF-6F200BB40A4E" src="https://github.com/user-attachments/assets/bcc31698-f26d-466c-8c78-4155738a1813" />
</div>

</n>

- Explanation
  
        The second page is where the quotes from the API is loaded. A search filter can be seen to filter quotes that contain a specific word. The search filter uses           useState to identify whether there is an empty string or a dedicated value to search for. An empty string retrieves all the quotes from the API whereas a string with      value returns filtered quotes. There also exists a dropdown for the backgroung and overall theme of the page. This makes use of arrays and useStates.


## Timer (breather.tsx) 

<div align="center">
    <img width="206" height="622" alt="simulator_screenshot_66D03848-4D90-421C-8CD1-089C5515C8B4" src="https://github.com/user-attachments/assets/622eca7f-d859-4e6e-8c3b-c976e15c72a3" />
    <img width="206" height="622" alt="simulator_screenshot_CBD9F612-D995-4551-9F1D-B53333D6BB64" src="https://github.com/user-attachments/assets/5c492c7b-8ca6-4b9e-be07-a51145f7df8d" />
</div>

</n>

- Explanation
  
        Lastly, the Timer page serves as a practice for the useEffect & useState Hook. It utilizes useState to keep the number of Minutes the user may wish to set the         timer to. The useEffect takes care of the count down using setIntervals. Three of the buttons are dependent on the "isRunning" state which determines the action of        the timer.
        
