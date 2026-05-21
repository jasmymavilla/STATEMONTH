chrome.runtime.onInstalled.addListener(() => {
  scheduleMonthlyReminder();
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'monthly-reminder') {
    chrome.notifications.create('statemonth-reminder', {
      type: 'basic',
      iconUrl: 'icons/icon128.png',
      title: 'STATEMONTH',
      message: "New month, new statement. Drop your CSV and see where it all went.",
    });
    scheduleMonthlyReminder();
  }
});

function scheduleMonthlyReminder() {
  const now = new Date();
  // Fire on the 2nd of next month at 9am — good time to upload last month's CSV
  const next = new Date(now.getFullYear(), now.getMonth() + 1, 2, 9, 0, 0);
  chrome.alarms.create('monthly-reminder', { when: next.getTime() });
}
