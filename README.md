# 05 Third-Party APIs: Work Day Scheduler
This is a daily planner that displays the current date at the top of the page.  Below is a business hour page showing rows from 9am to 5pm.  The user can enter notes or appointments and save them.  On reload the entries remain.  The current hour highlights red, future hours green and past hours gray.


## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```


  
