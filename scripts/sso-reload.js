const timeout = 4;
console.log(`FZ Tools will reload this tab in ${timeout} minutes to help preserve your session.`);
setTimeout(() => window.location.reload(), timeout * 60 * 1000);
